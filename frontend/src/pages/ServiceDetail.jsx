import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import ServiceSidebar from "../components/common/ServiceSidebar.jsx";
import useReveal from "../hooks/useReveal.js";
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

   The sidebar is shared with the category and overview pages — see
   ServiceSidebar. One further substitution from the original: its Bootstrap carousel and tab panels are dropped. Both needed
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
              <ServiceSidebar
                links={[
                  { label: `All ${category.navLabel}`, path: category.path },
                  ...siblings.map((s) => ({
                    label: s.navLabel,
                    path: s.path,
                    active: s.slug === service.slug,
                  })),
                ]}
                ctaHeading="Not sure where to start?"
                ctaBody={`Tell us what ${service.title.toLowerCase()} looks like in your business today and we will come back with what it would take to hand it over.`}
              />
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
