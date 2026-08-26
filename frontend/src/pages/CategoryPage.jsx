import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import { getCategory, servicesIn } from "../data/services.js";

/* One component, three routes. Phase 6 finishes the layout; the routing,
   data lookup and unknown-slug handling are already real. */

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategory(categorySlug);

  if (!category) return <Navigate to="/404" replace />;

  const items = servicesIn(category.slug);

  return (
    <Layout bodyClass={["subPage", "servicePage"]}>
      <PageBanner
        title={category.title}
        trail={[
          { label: "Our Services", path: "/services" },
          { label: category.navLabel },
        ]}
      />

      <section className="service-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>{category.title}</h2>
            <div className="border"></div>
            <p>{category.intro}</p>
          </div>

          <div className="row">
            {items.map((service) => (
              <div className="col-md-4 col-sm-6" key={service.slug}>
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
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
