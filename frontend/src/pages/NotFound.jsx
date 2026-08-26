import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";

/* The theme ships no 404 page, but a router needs one. */
export default function NotFound() {
  return (
    <Layout bodyClass={["subPage"]}>
      <PageBanner title="Page not found" trail={[{ label: "404" }]} />
      <section className="section-padding">
        <div className="container text-center">
          <p>
            That page does not exist. Try{" "}
            <Link to="/services">our services</Link> or{" "}
            <Link to="/contact">get in touch</Link>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
