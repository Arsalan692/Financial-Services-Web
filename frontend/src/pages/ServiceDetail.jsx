import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import useReveal from "../hooks/useReveal.js";
import site from "../config/site.js";
import {
  getCategory,
  getService,
  servicesIn,
  serviceImage,
} from "../data/services.js";

/* One component, fourteen routes.

   The theme ships no single-service page, but `service-one.html` is
   effectively one: `service-page-section` with a `side-bar` on the left
   and a `single-service-wrapper` on the right. Both are fully styled in
   style.css, so this reuses those class names rather than inventing a
   layout.

   Two substitutions from the original:
     - Its sidebar "Brochure" block becomes a quote CTA; there is no
       brochure to download.
     - Its Bootstrap carousel and tab panels are dropped. Both needed
       Bootstrap's JS, and neither has content behind it here — a single
       image and the service's own list say the same thing without
       inventing copy to fill three tabs. */

export default function ServiceDetail() {
  const { categorySlug, serviceSlug } = useParams();
  const category = getCategory(categorySlug);
  const service = getService(categorySlug, serviceSlug);

  const mediaRef = useReveal({ threshold: 0.1 });
  const bodyRef = useReveal({ threshold: 0.1 });

  if (!category || !service) return <Navigate to="/404" replace />;

  const siblings = servicesIn(categorySlug);

  return (
    <Layout bodyClass={["subPage", "servicePage"]}>
      <PageBanner
        title={service.title}
        trail={[
          { label: category.navLabel, path: category.path },
          { label: service.navLabel },
        ]}
      />

      <section className="service-page-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="side-bar">
                <ul className="page-list text-left">
                  <li>
                    <Link to={category.path}>
                      All {category.navLabel}
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                  </li>
                  {siblings.map((s) => (
                    <li
                      key={s.slug}
                      className={s.slug === service.slug ? "active" : undefined}
                    >
                      <Link
                        to={s.path}
                        aria-current={
                          s.slug === service.slug ? "page" : undefined
                        }
                      >
                        {s.navLabel}
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
                    <i
                      className="fa fa-volume-control-phone"
                      aria-hidden="true"
                    ></i>
                    <div className="text">
                      <a href={site.contact.phoneHref}>{site.contact.phone}</a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div className="text">
                      <a href={`mailto:${site.contact.email}`}>
                        {site.contact.email}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="brochure text-left">
                  <h4>Not sure where to start?</h4>
                  <p>
                    Tell us what {service.title.toLowerCase()} looks like in
                    your business today and we will come back with what it
                    would take to hand it over.
                  </p>
                  <Link to="/contact" className="btn btn-primary">
                    Request a quote
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="single-service-wrapper">
                <div
                  className="fx-media-frame fx-reveal fx-reveal-right"
                  ref={mediaRef}
                >
                  <img
                    src={serviceImage(service)}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>

                <div className="fx-reveal fx-reveal-delay" ref={bodyRef}>
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>

                  <h4 className="fx-subhead">What this covers</h4>
                  <ul className="service-list">
                    {service.includes.map((line) => (
                      <li key={line}>
                        <i className="fa fa-adjust" aria-hidden="true"></i>{" "}
                        {line}
                      </li>
                    ))}
                  </ul>

                  <p>
                    Every engagement runs off the records you already keep, so
                    there is no rebuilding your history before the work can
                    start. If {service.navLabel.toLowerCase()} is one of
                    several things you need covered, the rest of our{" "}
                    <Link to={category.path}>
                      {category.navLabel.toLowerCase()}
                    </Link>{" "}
                    work sits alongside it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
