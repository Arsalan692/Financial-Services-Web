import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import Stats from "../components/about/Stats.jsx";
import Faq from "../components/about/Faq.jsx";
import ServiceCarousel from "../components/about/ServiceCarousel.jsx";
import GettingStarted from "../components/about/GettingStarted.jsx";
import useReveal from "../hooks/useReveal.js";

/* Ported from about.html: the intro block, the counter row, a short
   summary of the three verticals, and the FAQ accordion.

   The theme's `finance-service-section` carousel is dropped — it needed
   Owl Carousel and duplicated what /services already does properly. Its
   `video-section` is dropped too; there is no company video. */

export default function About() {
  const introRef = useReveal();
  const figureRef = useReveal();

  return (
    <Layout bodyClass={["subPage", "aboutPage"]}>
      <PageBanner title="About Us" trail={[{ label: "About Us" }]} />

      <section className="about-office-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content fx-reveal fx-reveal-left" ref={introRef}>
                <h3>
                  The accounting that keeps you compliant, and the outreach
                  that keeps you growing.
                </h3>
                <p>
                  Most firms give you a number and leave you to interpret it.
                  We keep the records underneath it right, explain what
                  changed, and deal with the notices that follow rather than
                  forwarding them on.
                </p>
                <p>
                  Everything runs from the records you already keep — payroll
                  off your employee data, books off your bank statements.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Talk to us
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="caption text-center fx-anim fx-anim-slide-right"
                ref={figureRef}
              >
                <img src="/assets/images/office-man.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="finance-service-section section-padding">
        <div className="container text-center">
          <div className="section-title">
            <h2>What we do</h2>
            <div className="border-3"></div>
            <p>
              Fourteen services across three areas. Take one of them or all
              of them — nothing is bundled.
            </p>
            <Link to="/services" className="link">
              All services
            </Link>
          </div>

          <ServiceCarousel />
        </div>
      </section>

      <section className="multi-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Faq />
            </div>
            <div className="col-md-5">
              <GettingStarted />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
