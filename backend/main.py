"""Fintechly contact endpoint.

The site is otherwise static. This exists for one job: accept an enquiry
from the contact form, keep it, and pass it on by email.

Enquiries are appended to a JSONL file *before* email is attempted, so a
missing or broken SMTP configuration loses nothing — the enquiry is on
disk and can be replayed. The endpoint only reports success once the
enquiry is safely recorded.
"""

from __future__ import annotations

import json
import logging
import os
import smtplib
from datetime import datetime, timezone
from email.message import EmailMessage
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

logger = logging.getLogger("fintechly.contact")
logging.basicConfig(level=logging.INFO)

ENQUIRY_LOG = Path(os.getenv("ENQUIRY_LOG", "enquiries.jsonl"))

# Comma-separated list, so a deployed origin can be added without a code
# change. The Vite dev server is allowed by default.
ALLOWED_ORIGINS = [
    origin.strip()
    for origin in os.getenv(
        "ALLOWED_ORIGINS", "http://localhost:5173,http://localhost:5174"
    ).split(",")
    if origin.strip()
]

SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
MAIL_FROM = os.getenv("MAIL_FROM", SMTP_USER or "")
MAIL_TO = os.getenv("MAIL_TO", "")

app = FastAPI(title="Fintechly contact API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type"],
)


class Enquiry(BaseModel):
    """What the form sends. Both forms post this shape; the homepage one
    simply leaves `location` empty."""

    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=5000)
    location: str = Field(default="", max_length=200)
    service: str = Field(default="", max_length=80)


def record(enquiry: Enquiry) -> None:
    """Append to the enquiry log. Raises if it cannot be written, because
    an enquiry we cannot store is one we would otherwise lose silently."""
    entry = enquiry.model_dump()
    entry["received_at"] = datetime.now(timezone.utc).isoformat()

    ENQUIRY_LOG.parent.mkdir(parents=True, exist_ok=True)
    with ENQUIRY_LOG.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(entry, ensure_ascii=False) + "\n")


def send_email(enquiry: Enquiry) -> bool:
    """Best effort. Returns False rather than raising: the enquiry is
    already recorded by this point, so a mail failure must not turn into
    an error for the person who filled the form in."""
    if not (SMTP_HOST and MAIL_TO and MAIL_FROM):
        logger.warning("SMTP not configured — enquiry recorded but not emailed")
        return False

    body = (
        f"Name:     {enquiry.name}\n"
        f"Email:    {enquiry.email}\n"
        f"Location: {enquiry.location or '—'}\n"
        f"Service:  {enquiry.service or '—'}\n\n"
        f"{enquiry.message}\n"
    )

    mail = EmailMessage()
    mail["Subject"] = f"Website enquiry — {enquiry.name}"
    mail["From"] = MAIL_FROM
    mail["To"] = MAIL_TO
    mail["Reply-To"] = enquiry.email
    mail.set_content(body)

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=15) as smtp:
            smtp.starttls()
            if SMTP_USER and SMTP_PASSWORD:
                smtp.login(SMTP_USER, SMTP_PASSWORD)
            smtp.send_message(mail)
        return True
    except Exception:
        logger.exception("Could not send enquiry email")
        return False


@app.get("/api/health")
def health() -> dict:
    return {
        "status": "ok",
        "smtp_configured": bool(SMTP_HOST and MAIL_TO and MAIL_FROM),
    }


@app.post("/api/contact")
def contact(enquiry: Enquiry) -> dict:
    try:
        record(enquiry)
    except OSError:
        logger.exception("Could not record enquiry")
        raise HTTPException(
            status_code=500,
            detail="We could not record your message. Please email us directly.",
        )

    emailed = send_email(enquiry)
    # Success either way: the enquiry is on disk. `emailed` tells the
    # operator whether it also went out, without worrying the sender.
    return {"ok": True, "emailed": emailed}
