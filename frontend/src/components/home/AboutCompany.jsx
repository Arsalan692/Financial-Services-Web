import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal.js";

/* The theme's `working-section`. The template put a stock video in the
   right-hand column; at the client's request that is an image instead —
   the one generated for this project, which is why it comes from
   /assets/generated/ rather than the theme's own image folder.

   Because a bare <img> reads as pasted in where a <video> read as
   deliberate, it sits in `.fx-media-frame` (soft shadow, rounded, slow
   zoom on hover) behind a cyan corner bracket, and the two columns
   arrive from opposite sides as the section scrolls into view. */

export default function AboutCompany() {
  const textRef = useReveal();
  const mediaRef = useReveal();

  return (
    <section className="working-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>About the company</h2>
          <div className="border"></div>
        </div>

        <div className="section-wrapper">
          <div className="row">
            <div className="col-md-4">
              <div
                className="wrapper-content fx-reveal fx-reveal-left"
                ref={textRef}
              >
                <h4>
                  Small enough to know your business, structured enough to
                  keep it compliant.
                </h4>
                <p>
                  We handle the work that has to be right every month —
                  payroll runs, reconciliations, filings — and the work that
                  decides whether next year is bigger than this one. Clients
                  come to us for the books and stay for the pipeline.
                </p>
                <Link to="/about" className="btn btn-primary">
                  More about us
                </Link>
              </div>
            </div>

            <div className="col-md-8">
              <div className="video-wrapper">
                <div
                  className="fx-media-frame fx-reveal fx-reveal-right fx-reveal-delay"
                  ref={mediaRef}
                >
                  <img
                    src="/assets/generated/working-about.jpg"
                    alt="Three colleagues reviewing financial statements around a conference table"
                    width="1376"
                    height="768"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
