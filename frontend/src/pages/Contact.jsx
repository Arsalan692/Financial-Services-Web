import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";

/* Phase 7. */
export default function Contact() {
  return (
    <Layout bodyClass={["subPage", "contactPage"]} cta={false}>
      <PageBanner title="Contact Us" trail={[{ label: "Contact Us" }]} />
      <section className="section-padding">
        <div className="container text-center">
          <p>Phase 7 builds this page.</p>
        </div>
      </section>
    </Layout>
  );
}
