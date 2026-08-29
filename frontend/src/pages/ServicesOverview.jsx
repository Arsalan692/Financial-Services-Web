import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import ServiceSidebar from "../components/common/ServiceSidebar.jsx";
import ServiceCard from "../components/common/ServiceCard.jsx";
import useReveal from "../hooks/useReveal.js";
import { categories, servicesIn, services } from "../data/services.js";

/* The index of the three verticals, at /services.

   Same shell as a category page, but each card is a vertical rather than
   a service, and each carries its own services underneath as text links
   — so this page routes people in one click instead of two, and does not
   read as three lonely cards. */

export default function ServicesOverview() {
  const gridRef = useReveal({ threshold: 0.08 });

  return (
    <Layout bodyClass={["subPage", "servicePage"]}>
      <PageBanner title="Our Services" trail={[{ label: "Our Services" }]} />

      <section className="service-page-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ServiceSidebar
                links={categories.map((c) => ({
                  label: c.navLabel,
                  path: c.path,
                }))}
                ctaHeading="Not sure which you need?"
                ctaBody={`There are ${services.length} services across the three areas below. Tell us what is taking up your time and we will point you at the right ones.`}
              />
            </div>

            <div className="col-md-8">
              <div className="working-section">
                <div className="header">
                  <div className="row">
                    <div className="col-sm-4">
                      <h2>Our Services</h2>
                    </div>
                    <div className="col-sm-8">
                      <p>
                        Three areas of work, {services.length} services in
                        total. The accounting keeps the business compliant, the
                        lead generation keeps it growing, and the web work
                        keeps it visible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="section-wrapper fx-reveal" ref={gridRef}>
                  <div className="row">
                    {categories.map((category, i) => {
                      const items = servicesIn(category.slug);
                      return (
                        <div className="col-sm-6" key={category.slug}>
                          <ServiceCard
                            image={category.image}
                            title={category.title}
                            to={category.path}
                            last={i === categories.length - 1}
                          >
                            <ul className="fx-category-services">
                              {items.map((s) => (
                                <li key={s.slug}>
                                  <Link to={s.path}>{s.navLabel}</Link>
                                </li>
                              ))}
                            </ul>
                          </ServiceCard>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
