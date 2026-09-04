import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navItems from "../../data/nav.js";
import site from "../../config/site.js";

/* Mobile navigation — the theme's off-canvas drawer, rebuilt in React.

   The template drove this with jQuery `slideToggle`. Here the panel is
   open when `#offcanvas-menu` carries `.toggled`, and a submenu is open
   when its <ul> carries `.fx-open` (theme.css supplies the matching rule,
   since the theme's own CSS hides every submenu with display:none).

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
        className={`visible-xs visible-sm${open ? " toggled" : ""}`}
      >
        <span
          className="close-menu"
          onClick={closeMenu}
          role="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              closeMenu();
            }
          }}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>

        <ul className="menu-wrapper">
          {navItems.map((item) => {
            if (!item.children) {
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={pathname === item.path ? "active" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            const isExpanded = expanded === item.path;

            return (
              <li key={item.path}>
                {/* Tapping a parent expands it rather than navigating —
                    otherwise its children would be unreachable on touch. */}
                <button
                  type="button"
                  className={`dropmenu${
                    pathname.startsWith(item.path) ? " active" : ""
                  }`}
                  aria-expanded={isExpanded}
                  onClick={() => setExpanded(isExpanded ? null : item.path)}
                >
                  {item.label}{" "}
                  <i
                    className={`fa fa-angle-${isExpanded ? "up" : "down"}`}
                    aria-hidden="true"
                  ></i>
                </button>

                <ul
                  className={`dropDown sub-menu${isExpanded ? " fx-open" : ""}`}
                >
                  {/* The parent's own page still needs to be reachable. */}
                  <li>
                    <Link
                      to={item.path}
                      className={pathname === item.path ? "active" : undefined}
                    >
                      All {item.label}
                    </Link>
                  </li>
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link
                        to={child.path}
                        className={
                          pathname === child.path ? "active" : undefined
                        }
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
