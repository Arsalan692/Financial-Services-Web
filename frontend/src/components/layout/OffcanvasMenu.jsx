import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navItems from "../../data/nav.js";
import site from "../../config/site.js";

/* Mobile navigation — the theme's off-canvas drawer, rebuilt in React.

   The panel is open when `#offcanvas-menu` carries `.toggled` (the theme's
   own slide-in rule). Everything inside it is the project's own `fx-drawer`
   design in theme.css — navy, Poppins throughout, chevrons aligned right,
   submenus that animate open, and a contact block at the foot — rather
   than the template's grey Montserrat list.

   Behaviour the original did not have: the drawer closes on navigation
   and on Escape, and page scroll is locked while it is open. */

export default function OffcanvasMenu() {
  const { pathname } = useLocation();

  // The drawer records the route it was opened on rather than a bare
  // boolean, so navigating closes it as a derived value — no effect
  // firing setState after the route changes.
  const [openedAt, setOpenedAt] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const open = openedAt === pathname;

  const openMenu = () => {
    setOpenedAt(pathname);
    setExpanded(null);
  };
  const closeMenu = () => setOpenedAt(null);

  // Escape closes the drawer, and the page behind it must not scroll.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      {/* The template leaves mobile with nothing but a burger floating over
          the hero — its only branding is a background image that appears on
          the toggle once it goes sticky. This is a real bar instead: logo
          left, burger right, stuck to the top like the desktop nav.

          Visibility is a media query in theme.css rather than Bootstrap's
          `visible-xs visible-sm`, because those set `display: block`
          !important and would break the flex layout. */}
      <div className="fx-mobile-bar">
        <Link to="/" className="fx-mobile-bar-brand" onClick={closeMenu}>
          <img src={site.logo} alt={site.name} />
        </Link>

        <span
          className="menu-toggle"
          onClick={openMenu}
          role="button"
          tabIndex={0}
          aria-label="Open menu"
          aria-expanded={open}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openMenu();
            }
          }}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
      </div>

      {/* Tapping away from an open drawer is how every phone menu closes;
          the template offered only the small ×. Rendered only while open so
          it never sits over the page swallowing taps. */}
      {open && (
        <div
          className="fx-menu-scrim"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        id="offcanvas-menu"
        className={`visible-xs visible-sm fx-drawer${open ? " toggled" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
      >
        <div className="fx-drawer-head">
          <Link to="/" className="fx-drawer-brand" onClick={closeMenu}>
            <img src={site.logoFooter} alt={site.name} />
          </Link>
          <button
            type="button"
            className="fx-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <ul className="fx-drawer-nav">
          {navItems.map((item) => {
            if (!item.children) {
              const active = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`fx-drawer-link${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            const isExpanded = expanded === item.path;
            const inBranch = pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                {/* Tapping a parent expands it rather than navigating —
                    otherwise its children would be unreachable on touch. */}
                <button
                  type="button"
                  className={`fx-drawer-link fx-drawer-parent${
                    inBranch ? " is-active" : ""
                  }${isExpanded ? " is-open" : ""}`}
                  aria-expanded={isExpanded}
                  onClick={() => setExpanded(isExpanded ? null : item.path)}
                >
                  <span>{item.label}</span>
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </button>

                {/* Always mounted so it can animate open; `inert` keeps
                    the collapsed links out of the tab order. */}
                <div
                  className={`fx-drawer-sub${isExpanded ? " is-open" : ""}`}
                  inert={!isExpanded}
                >
                  <ul>
                    {/* The parent's own page still needs to be reachable. */}
                    <li>
                      <Link
                        to={item.path}
                        className={pathname === item.path ? "is-active" : undefined}
                      >
                        All {item.label}
                      </Link>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className={
                            pathname === child.path ? "is-active" : undefined
                          }
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="fx-drawer-foot">
          <Link to="/contact" className="fx-drawer-cta">
            Talk to us
          </Link>
          <a href={site.contact.phoneHref} className="fx-drawer-contact">
            <i className="fa fa-phone" aria-hidden="true"></i>
            {site.contact.phone}
          </a>
          <a href={`mailto:${site.contact.email}`} className="fx-drawer-contact">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            {site.contact.email}
          </a>
        </div>
      </div>
    </>
  );
}
