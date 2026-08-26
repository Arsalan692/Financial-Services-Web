import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";

/* Phase 7. */
export default function About() {
  return (
    <Layout bodyClass={["subPage", "aboutPage"]}>
      <PageBanner title="About Us" trail={[{ label: "About Us" }]} />
      <section className="section-padding">
        <div className="container text-center">
          <p>Phase 7 builds this page.</p>
        </div>
      </section>
    </Layout>
  );
}
