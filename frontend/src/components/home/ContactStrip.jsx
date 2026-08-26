import { useState } from "react";
import useReveal from "../../hooks/useReveal.js";
import { categories, servicesIn } from "../../data/services.js";

/* The theme's `contact-section` — a callback request form with a cut-out
   photo alongside it.

   The backend lands in phase 7. Until then the form validates properly
   and reports a real result rather than pretending to submit: nothing is
   sent, and the message says so, so no enquiry is silently lost. */

const EMPTY = { name: "", email: "", service: "", message: "" };

export default function ContactStrip() {
  // The template marked the cut-out `wow slideInRight`; the form block had
  // no motion at all. Both animate in now, from opposite sides.
  const formRef = useReveal({ threshold: 0.12 });
  const figureRef = useReveal({ threshold: 0.12 });

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const update = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const found = {};
    if (!values.name.trim()) found.name = "Tell us your name.";
    if (!values.email.trim()) {
      found.email = "We need an email to reply to.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      found.email = "That email address does not look right.";
    }
    if (!values.message.trim()) {
      found.message = "Tell us a little about your business.";
    }
    return found;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);

    if (Object.keys(found).length) {
      setStatus(null);
      return;
    }

    // Phase 7 replaces this with a POST to site.contactEndpoint.
    setStatus("pending-backend");
  };

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

              <form className="contact-form" onSubmit={onSubmit} noValidate>
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
                    <div className="selection">
                      <select
                        name="service"
                        className="dropdown-select"
                        value={values.service}
                        onChange={update("service")}
                        aria-label="Which service are you interested in?"
                      >
                        <option value="">Select a service (optional)</option>
                        {categories.map((category) => (
                          <optgroup
                            key={category.slug}
                            label={category.title}
                          >
                            {servicesIn(category.slug).map((service) => (
                              <option key={service.slug} value={service.slug}>
                                {service.title}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
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
                  <button className="submitBtn btn btn-primary" type="submit">
                    Submit
                  </button>

                  {status === "pending-backend" && (
                    <p className="fx-form-note" role="status">
                      This form is not connected yet — nothing was sent.
                      Please email us directly in the meantime.
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
