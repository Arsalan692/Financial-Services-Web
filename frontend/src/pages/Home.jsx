import Layout from "../components/layout/Layout.jsx";
import Hero from "../components/home/Hero.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import AboutCompany from "../components/home/AboutCompany.jsx";
import ServiceGrid from "../components/home/ServiceGrid.jsx";
import ContactStrip from "../components/home/ContactStrip.jsx";

/* index-five.html, section for section.

   The template's `news-section` (a three-post blog teaser) is dropped —
   the site has no blog. `secure-section` is the CTA band, which Layout
   renders for every page. */

export default function Home() {
  return (
    <Layout bodyClass="homePageFive">
      <Hero />
      <WhyChooseUs />
      <AboutCompany />
      <ServiceGrid />
      <ContactStrip />
    </Layout>
  );
}
