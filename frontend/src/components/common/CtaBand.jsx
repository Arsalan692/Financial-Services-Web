import { Link } from "react-router-dom";

/* The theme's `secure-section` — a full-width band with a headline and one
   button. It appears above the footer on most pages, so it lives here
   rather than being repeated per page. */

export default function CtaBand({
  heading = "Let us take the books, the filings and the follow-up off your desk",
  ctaLabel = "Talk to us",
  ctaPath = "/contact",
}) {
  return (
    <section className="secure-section">
      <div className="container">
        <h2>{heading}</h2>
        <Link to={ctaPath} className="btn btn-primary pull-right">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
