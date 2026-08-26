import Navbar from "./Navbar.jsx";
import OffcanvasMenu from "./OffcanvasMenu.jsx";
import Footer from "./Footer.jsx";
import CtaBand from "../common/CtaBand.jsx";
import useBodyClass from "../../hooks/useBodyClass.js";

/* Wraps every page: header, content, CTA band, footer.

   `bodyClass` is passed through by each page because the theme scopes its
   CSS on <body> — see useBodyClass. `cta` is opt-out for pages that end
   with their own call to action (Contact, for one). */

export default function Layout({ children, bodyClass, cta = true }) {
  useBodyClass(bodyClass);

  return (
    <>
      {/* The theme's `topper` contact bar sat above the nav. Removed at the
          client's request — the contact details still live in the footer
          and on the Contact page. */}
      <header className="header-section">
        <Navbar />
      </header>

      <main>{children}</main>

      {cta && <CtaBand />}
      <Footer />
      <OffcanvasMenu />
    </>
  );
}
