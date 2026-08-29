# backend

One endpoint, `POST /api/contact`, behind the site's two contact forms.

```bash
python -m venv .venv
.venv/Scripts/activate        # Windows;  source .venv/bin/activate elsewhere
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

`GET /api/health` reports whether SMTP is configured.

## Enquiries are recorded before they are emailed

Every accepted enquiry is appended to `enquiries.jsonl` *first*, then
emailed. If SMTP is unconfigured or the mail server is down, the endpoint
still returns success — because the enquiry is safely on disk and can be
replayed — and logs a warning. Nothing a visitor sends is ever lost to a
mail misconfiguration.

`enquiries.jsonl` contains personal data. It is gitignored, and on a real
deployment it belongs on a volume that is backed up and access-controlled.

The Vite dev server proxies `/api` here, so the frontend calls a relative
path in development and in production alike.
