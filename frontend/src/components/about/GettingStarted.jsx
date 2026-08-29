import { Link } from "react-router-dom";

/* Sits beside the FAQ in the theme's two-column `multi-section`.

   The theme fills that column with a grid of client logos. Those are the
   template's invented brands — putting them here would claim client
   relationships the firm does not have, so they are not used. This is
   real, useful content instead: what actually happens when someone gets
   in touch. */

const steps = [
  {
    title: "Tell us what needs handling",
    body: "A payroll run, a backlog of books, a filing deadline, or a pipeline that has gone quiet. Whatever is taking up your time.",
  },
  {
    title: "We look at what you already have",
    body: "Your employee data, bank statements, existing records. We work from those rather than asking you to rebuild anything first.",
  },
  {
    title: "You get a scope and a price",
    body: "What we would take on, what it costs, and when it starts. Take one service or several — nothing is bundled.",
  },
];

export default function GettingStarted() {
  return (
    <div className="fx-getting-started">
      <h3>Getting started</h3>
      <ol className="fx-steps">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="fx-step-number">{i + 1}</span>
            <div className="fx-step-body">
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link to="/contact" className="btn btn-primary">
        Talk to us
      </Link>
    </div>
  );
}
