import { Link } from "react-router-dom";

/* The theme's `header-title` banner, used at the top of every inner page.

   The template hardcoded its breadcrumb as the literal string "Home > About".
   Here it is built from a trail, so deep pages read
   Home > Financial Services > Payroll Run. */

export default function PageBanner({ title, trail = [] }) {
  return (
    <section className="header-title section-padding">
      <div className="container text-center">
        <h2 className="title">{title}</h2>
        <span className="sub-title">
          <Link to="/">Home</Link>
          {trail.map((crumb) => (
            <span key={crumb.path ?? crumb.label}>
              {" > "}
              {crumb.path ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                crumb.label
              )}
            </span>
          ))}
        </span>
      </div>
    </section>
  );
}
