import { useState } from "react";
import faqs from "../../data/faqs.js";

/* The theme's FAQ accordion, which ran on jQuery UI. Rebuilt with state
   and real buttons, so it is keyboard operable and screen readers are
   told what is expanded — neither of which the original managed. */

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-content">
      <h2>Common questions</h2>
      <div className="accordion-content fx-accordion">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="fx-accordion-item">
              <h3>
                <button
                  type="button"
                  className={`fx-accordion-trigger${isOpen ? " is-open" : ""}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  <i
                    className={`fa fa-angle-${isOpen ? "up" : "down"}`}
                    aria-hidden="true"
                  ></i>
                </button>
              </h3>
              {/* Always rendered, so it can animate. A CSS grid row that
                  goes 0fr -> 1fr expands to the content's natural height
                  without needing a hard-coded max-height. */}
              <div
                className={`fx-accordion-panel${isOpen ? " is-open" : ""}`}
                aria-hidden={!isOpen}
              >
                <div className="fx-accordion-panel-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
