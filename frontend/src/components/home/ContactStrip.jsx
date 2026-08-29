import useReveal from "../../hooks/useReveal.js";
import useContactForm from "../../hooks/useContactForm.js";
import { serviceOptionGroups } from "../../data/services.js";
import SelectField from "../common/SelectField.jsx";

/* The theme's `contact-section` — a callback request form with a cut-out
   photo alongside it.

   Validation and submission live in useContactForm, shared with the
   Contact page — both post the same shape to the same endpoint. */

export default function ContactStrip() {
  // The template marked the cut-out `wow slideInRight`; the form block had
  // no motion at all. Both animate in now, from opposite sides.
  const formRef = useReveal({ threshold: 0.12 });
  const figureRef = useReveal({ threshold: 0.12 });

  const { values, errors, status, message, update, setField, submit } =
    useContactForm({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  return (
    <section className="contact-section fx-clip-x">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div
              className="contact-left-bar fx-anim fx-anim-fade-left"
              ref={formRef}
            >
              <span className="header">Request a call back</span>
              <h4>
                Talk to someone who will <br /> actually be doing the work
              </h4>
              <p>
                Tell us what you need handled — payroll, a backlog of books,
                a filing deadline, or a pipeline that has gone quiet — and we
                will come back to you.
              </p>

              <form className="contact-form" onSubmit={submit} noValidate>
                <div className="row">
                  <div className="col-sm-6 padding-right">
                    <div className="form-group">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        value={values.name}
                        onChange={update("name")}
                        aria-invalid={Boolean(errors.name)}
                      />
                      {errors.name && (
                        <span className="fx-field-error">{errors.name}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-sm-6 padding-left">
                    <div className="form-group">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={values.email}
                        onChange={update("email")}
                        aria-invalid={Boolean(errors.email)}
                      />
                      {errors.email && (
                        <span className="fx-field-error">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    {/* form-group carries the theme's field spacing — the
                        native select it replaced sat inside one, and
                        without it this field ran into the textarea. */}
                    <div className="form-group">
                      <SelectField
                        groups={serviceOptionGroups()}
                        value={values.service}
                        onChange={setField("service")}
                        placeholder="Select a service (optional)"
                        ariaLabel="Which service are you interested in?"
                        variant="dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control form-message"
                    rows="4"
                    placeholder="What is your business about?"
                    value={values.message}
                    onChange={update("message")}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <span className="fx-field-error">{errors.message}</span>
                  )}
                </div>

                <div className="form-group text-center">
                  <button
                    className="submitBtn btn btn-primary"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Submit"}
                  </button>

                  {message && (
                    <p
                      className={`fx-form-note${
                        status === "error" ? " fx-form-note-error" : ""
                      }`}
                      role="status"
                    >
                      {message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4 hidden-sm hidden-xs">
            <div
              className="contact-right-bar fx-anim fx-anim-slide-right"
              ref={figureRef}
            >
              <img src="/assets/images/girl-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
