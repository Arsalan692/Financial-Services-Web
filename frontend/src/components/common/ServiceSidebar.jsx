import { Link } from "react-router-dom";
import site from "../../config/site.js";

/* The theme's `side-bar`, shared by all three service-area page types:
   the /services overview, the three category pages and the fourteen
   service pages. Only the link list and the CTA wording differ, so those
   are props and everything else stays identical.

   The theme's own bottom block was a brochure download. There is no
   brochure, so it carries a quote CTA instead — same `brochure` class, so
   it keeps the theme's styling. */

export default function ServiceSidebar({ links, ctaHeading, ctaBody }) {
  return (
    <div className="side-bar">
      <ul className="page-list text-left">
        {links.map((link) => (
          <li key={link.path} className={link.active ? "active" : undefined}>
            <Link to={link.path} aria-current={link.active ? "page" : undefined}>
              {link.label}
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="location">
        <li className="heading">Contact</li>
        <li>
          <i className="fa fa-road" aria-hidden="true"></i>
          <div className="text">{site.contact.address}</div>
        </li>
        <li>
          <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
          <div className="text">
            <a href={site.contact.phoneHref}>{site.contact.phone}</a>
          </div>
        </li>
        <li>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <div className="text">
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>
        </li>
      </ul>

      <div className="brochure text-left">
        <h4>{ctaHeading}</h4>
        <p>{ctaBody}</p>
        <Link to="/contact" className="btn btn-primary">
          Request a quote
        </Link>
      </div>
    </div>
  );
}
