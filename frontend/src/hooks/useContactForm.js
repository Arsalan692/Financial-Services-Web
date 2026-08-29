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
      const response = await fetch(site.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const detail = await response.json().catch(() => null);
        throw new Error(detail?.detail ?? `Request failed (${response.status})`);
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
