import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import { categories, servicesIn } from "../data/services.js";

/* Phase 6 gives this the theme's full service-page treatment. The stub
   already reads from real data so the route is genuinely navigable. */

export default function ServicesOverview() {
  return (
    <Layout bodyClass={["subPage", "servicePage"]}>
      <PageBanner title="Our Services" trail={[{ label: "Our Services" }]} />

      <section className="service-section section-padding">
        <div className="container">
          <div className="row">
            {categories.map((category) => (
              <div className="col-md-4 col-sm-6" key={category.slug}>
                <div className="service-wrapper">
                  <i className={`fa ${category.icon}`} aria-hidden="true"></i>
                  <div className="wrapper-content">
                    <h3>
                      <Link to={category.path}>{category.title}</Link>
                    </h3>
                    <p>{category.excerpt}</p>
                    <p>
                      <small>
                        {servicesIn(category.slug).length} services
                      </small>
                    </p>
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
