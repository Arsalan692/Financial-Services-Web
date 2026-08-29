import { Link } from "react-router-dom";

/* The theme's listing card from `service.html`: image, title, and a
   "More info" link. Its `h3::before` draws a cyan underline across on
   hover, which comes free with the class names.

   `children` render between the title and the link, so the overview page
   can list a category's services inside the card rather than dangling
   them underneath it. */

export default function ServiceCard({
  image,
  title,
  to,
  last = false,
  children,
}) {
  return (
    <div className={`wrapper-content${last ? " last-wrapper" : ""}`}>
      <Link to={to}>
        <img src={image} alt={title} loading="lazy" />
      </Link>
      <h3>
        <Link to={to}>{title}</Link>
      </h3>
      {children}
      <Link to={to} className="link">
        More info <i className="fa fa-sort-asc" aria-hidden="true"></i>
      </Link>
    </div>
  );
}
