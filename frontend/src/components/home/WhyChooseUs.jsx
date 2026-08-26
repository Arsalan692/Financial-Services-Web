import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal.js";

/* The theme's `finance-section`: three cards, each with an icon that
   swaps on hover. Icon pairs (f4/f1, f5/f2, f6/f3) are the theme's own —
   the base icon shows, `.hover-icon` fades in over it. */

const reasons = [
  {
    icon: "f4.png",
    hoverIcon: "f1.png",
    title: "We work from your records",
    body: "Payroll from your employee database, books from your bank statements — nothing estimated.",
    to: "/services/financial",
    variant: "wrapper-one",
  },
  {
    icon: "f5.png",
    hoverIcon: "f2.png",
    title: "Accounting and growth",
    body: "The same team that closes your books can fill your pipeline — one relationship instead of three.",
    to: "/services",
    variant: "wrapper-two",
  },
  {
    icon: "f6.png",
    hoverIcon: "f3.png",
    title: "Notices handled for you",
    body: "IRS and state notices are dealt with as part of the service, never forwarded back to your desk.",
    to: "/services/financial/tax-filing",
    variant: "wrapper-three",
  },
];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section className="finance-section section-padding fx-reveal" ref={ref}>
      <div className="container text-center">
        <div className="section-title">
          <h2>Why choose us</h2>
          <div className="border"></div>
          <p>
            Most firms hand you a number and leave you to interpret it. We
            keep the underlying records right, explain what changed, and
            handle the correspondence that comes with them.
          </p>
        </div>

        <div className="row">
          {reasons.map((reason) => (
            <div className="col-md-4" key={reason.title}>
              <div className={`finance-wrapper ${reason.variant}`}>
                <div className="caption">
                  <img src={`/assets/images/icon/${reason.icon}`} alt="" />
                  <span className="hover-icon">
                    <img
                      src={`/assets/images/icon/${reason.hoverIcon}`}
                      alt=""
                    />
                  </span>
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
                <Link to={reason.to} className="link">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
