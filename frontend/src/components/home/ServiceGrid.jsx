import { Link } from "react-router-dom";
import { services } from "../../data/services.js";

/* The theme's `service-section`: six cards in two rows of three.

   The template repeated cards with `visible-sm` duplicates to pad its
   tablet layout; those are dropped, since the Bootstrap grid already
   reflows col-sm-6 correctly on its own.

   Six of the fourteen services are featured here, chosen to cover all
   three verticals rather than to over-represent one. */

const FEATURED = [
  "payroll-run",
  "bookkeeping",
  "tax-filing",
  "email-marketing",
  "appointment-setting",
  "web-design-development",
];

export default function ServiceGrid() {
  const featured = FEATURED.map((slug) =>
    services.find((s) => s.slug === slug),
  ).filter(Boolean);

  return (
    <section className="service-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Services we provide</h2>
          <div className="border"></div>
        </div>

        <div className="row first-row">
          {featured.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="row">
          {featured.slice(3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="btn btn-primary">
            All services
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="service-wrapper">
        <i className={`fa ${service.icon}`} aria-hidden="true"></i>
        <div className="wrapper-content">
          <h3>
            <Link to={service.path}>{service.title}</Link>
          </h3>
          <p>{service.excerpt}</p>
        </div>
      </div>
    </div>
  );
}
