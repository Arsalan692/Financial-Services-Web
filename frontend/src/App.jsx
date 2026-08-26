import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ServicesOverview from "./pages/ServicesOverview.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

/* 21 routes from 7 route declarations: the three category pages and the
   fourteen service pages are each one dynamic route, validated against
   services.js inside the component. */

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/:categorySlug" element={<CategoryPage />} />
        <Route
          path="/services/:categorySlug/:serviceSlug"
          element={<ServiceDetail />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
