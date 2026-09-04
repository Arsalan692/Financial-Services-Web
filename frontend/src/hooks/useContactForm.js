import { useState } from "react";
import site from "../config/site.js";

/* Shared by the homepage callback strip and the Contact page. Both post
   the same shape to the same endpoint, so validation and submission live
   here rather than being written twice.

   Status values:
     null        nothing submitted yet
     "sending"   request in flight
     "sent"      the backend accepted it
     "error"     it did not — the message says why

   Never reports success it did not get. If the request fails the person
   is told, and given the email address as a fallback, rather than being
   left believing an enquiry was delivered. */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Where the form posts.

   In development, nothing is set and it goes to /api/contact, which Vite
   proxies to the FastAPI app — the backend still owns the local flow.

   In production it goes to a hosted form service instead. The FastAPI
   endpoint records each enquiry to disk before it tries to email, so a
   mail failure never loses a lead; that guarantee needs an always-on
   process and a real filesystem, and free hosting gives neither — the
   container sleeps and the disk is wiped. Rather than deploy a backend
   whose main safety property does not hold, the deployed site posts to a
   service that owns delivery and keeps its own record.

   VITE_* values are inlined into the bundle at build time, so the access
   key is public. That is how these services are designed to work — it
   identifies a form, it does not authorise anything — but it is read
   from the environment rather than committed so it can be rotated
   without a code change. */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || site.contactEndpoint;
const ACCESS_KEY = import.meta.env.VITE_FORM_ACCESS_KEY;

export default function useContactForm(initial) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const update = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  // For controls that are not DOM inputs — the custom select hands back a
  // value, not an event.
  const setField = (field) => (value) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const found = {};
    if (!values.name?.trim()) found.name = "Tell us your name.";
    if (!values.email?.trim()) {
      found.email = "We need an email to reply to.";
    } else if (!EMAIL.test(values.email)) {
      found.email = "That email address does not look right.";
    }
    if (!values.message?.trim()) {
      found.message = "Tell us a little about your business.";
    }
    return found;
  };

  const submit = async (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus(null);
      return;
    }

    setStatus("sending");
    try {
      /* The form service takes the same fields plus its own envelope.
         `replyto` makes a reply in the inbox go to the enquirer rather
         than to the service, which is the whole point of receiving it. */
      const payload = ACCESS_KEY
        ? {
            access_key: ACCESS_KEY,
            subject: `Website enquiry — ${values.name}`,
            from_name: site.name,
            replyto: values.email,
            ...values,
            location: values.location || "—",
            service: values.service || "—",
          }
        : values;

      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = await response.json().catch(() => null);

      // The service answers 200 with `success: false` for a rejected
      // key, so an ok status is not on its own proof of delivery.
      if (!response.ok || body?.success === false) {
        throw new Error(
          body?.detail ?? body?.message ?? `Request failed (${response.status})`,
        );
      }

      setStatus("sent");
      setMessage(
        "Thanks — we have got your message and will come back to you.",
      );
      setValues(initial);
    } catch {
      setStatus("error");
      setMessage(
        `We could not send that. Please email us directly at ${site.contact.email}.`,
      );
    }
  };

  return { values, errors, status, message, update, setField, submit };
}
