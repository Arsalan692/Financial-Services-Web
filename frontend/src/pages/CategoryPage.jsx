import { useParams, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import ServiceSidebar from "../components/common/ServiceSidebar.jsx";
import ServiceCard from "../components/common/ServiceCard.jsx";
import useReveal from "../hooks/useReveal.js";
import { getCategory, servicesIn, serviceImage } from "../data/services.js";

/* One component, three routes — Financial Services, B2B Lead Generation
   and Digital Design & Development.

   Laid out like the theme's `service.html`: the shared sidebar on the
   left, and on the right a `working-section` header (heading beside its
   intro) above a two-column grid of cards. */

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategory(categorySlug);
  const gridRef = useReveal({ threshold: 0.08 });

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

      <section className="service-page-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ServiceSidebar
                links={items.map((s) => ({
                  label: s.navLabel,
                  path: s.path,
                }))}
                ctaHeading="Need more than one of these?"
                // Deliberately does not interpolate the category name: two of
                // the three already end in a noun ("Financial Services"),
                // which produced "financial services services".
                ctaBody="Most clients take more than one of these together. Tell us what you need covered and we will quote the whole thing."
              />
            </div>

            <div className="col-md-8">
              <div className="working-section">
                <div className="header">
                  <div className="row">
                    <div className="col-sm-4">
                      <h2>{category.title}</h2>
                    </div>
                    <div className="col-sm-8">
                      <p>{category.intro}</p>
                    </div>
                  </div>
                </div>

                <div className="section-wrapper fx-reveal" ref={gridRef}>
                  <div className="row">
                    {items.map((service, i) => (
                      <div className="col-sm-6" key={service.slug}>
                        <ServiceCard
                          image={serviceImage(service)}
                          title={service.title}
                          to={service.path}
                          last={i >= items.length - 2}
                        />
                      </div>
                    ))}
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
