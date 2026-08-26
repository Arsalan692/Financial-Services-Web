import { Link } from "react-router-dom";
import site from "../../config/site.js";
import { categories } from "../../data/services.js";

/* The theme's three-column footer. Its stock copy referenced a gardening
   company and its navigation listed pages this site does not have, so both
   are replaced — the links are built from the real category list. */

export default function Footer() {
  const year = new Date().getFullYear();

  const primaryLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
  ];

  const secondaryLinks = [
    ...categories.map((c) => ({ label: c.navLabel, path: c.path })),
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="footer-wrapper">
                <img src={site.logoFooter} alt={site.name} />
                <ul className="location">
                  <li>
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <div className="content">{site.contact.address}</div>
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div className="content">
                      <a href={site.contact.phoneHref}>{site.contact.phone}</a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <div className="content">
                      Working Hours: <br />
                      {site.contact.hours}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="footer-wrapper">
                <h3>About</h3>
                <p>
                  We handle the accounting that keeps a business running and
                  the outreach that keeps it growing — payroll, books, tax and
                  reconciliation on one side, lead generation and web services
                  on the other.
                </p>
                <ul className="social-icon">
                  {site.social.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} aria-label={s.label}>
                        <i className={`fa ${s.icon}`} aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-md-offset-1 col-sm-4">
              <div className="footer-wrapper last-wrapper">
                <h3>Navigation</h3>
                <ul className="wrapper-option clearfix">
                  {primaryLinks.map((l) => (
                    <li key={l.path}>
                      <Link to={l.path}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="wrapper-option">
                  {secondaryLinks.map((l) => (
                    <li key={l.path}>
                      <Link to={l.path}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right text-center">
        <div className="container">
          <p>
            {year} &copy; All rights reserved by {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
