import { Link, useLocation } from "react-router-dom";
import navItems from "../../data/nav.js";
import site from "../../config/site.js";

/* Desktop navigation.

   The theme opens its dropdowns with pure CSS
   (`li.dropdown:hover .dropdown-menu`), so no JavaScript is needed here —
   dropping Bootstrap's JS costs us nothing on desktop. All this component
   does is render the theme's markup and mark the active branch.

   `hidden-sm hidden-xs` keeps it desktop-only; OffcanvasMenu takes over
   below 992px, exactly as the template does. */

const isActive = (pathname, path) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-inverse hidden-sm hidden-xs">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img src={site.logo} alt={site.name} />
          </Link>
        </div>

        <div className="collapse navbar-collapse navbar-right">
          <ul className="nav navbar-nav">
            {navItems.map((item) => {
              const active = isActive(pathname, item.path);
              const classes = [
                active ? "active" : "",
                item.children ? "dropdown" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <li key={item.path} className={classes || undefined}>
                  <Link to={item.path}>
                    {item.label}
                    {item.children && (
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    )}
                  </Link>

                  {item.children && (
                    <ul className="dropdown-menu">
                      {item.children.map((child) => (
                        <li
                          key={child.path}
                          className={
                            pathname === child.path ? "active" : undefined
                          }
                        >
                          <Link to={child.path}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
