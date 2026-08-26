import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import {
  getCategory,
  getService,
  servicesIn,
  serviceImage,
} from "../data/services.js";

/* One component, fourteen routes.

   Phase 5 is where this gets the theme's full service-detail treatment.
   The stub already renders each service's real copy and a sidebar of its
   siblings, so every one of the fourteen routes is navigable now. */

export default function ServiceDetail() {
  const { categorySlug, serviceSlug } = useParams();
  const category = getCategory(categorySlug);
  const service = getService(categorySlug, serviceSlug);

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

      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                src={serviceImage(service)}
                alt={service.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h3 style={{ marginTop: 30 }}>{service.title}</h3>
              <p>{service.intro}</p>
              <ul>
                {service.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="col-md-4">
              <h4>{category.navLabel}</h4>
              <ul>
                {siblings.map((s) => (
                  <li key={s.slug}>
                    {s.slug === service.slug ? (
                      <strong>{s.navLabel}</strong>
                    ) : (
                      <Link to={s.path}>{s.navLabel}</Link>
                    )}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
