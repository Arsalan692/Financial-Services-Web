import Layout from "../components/layout/Layout.jsx";
import PageBanner from "../components/common/PageBanner.jsx";
import useContactForm from "../hooks/useContactForm.js";
import SelectField from "../components/common/SelectField.jsx";
import site from "../config/site.js";
import { serviceOptionGroups } from "../data/services.js";

/* Ported from contact.html.

   The theme's `map-section` is left out for now: it embeds a Google Map,
   which needs an API key, and the address in site.js is still a
   placeholder so there is nothing true to point at. Worth adding once
   there is a real address — OpenStreetMap needs no key if Google's
   billing setup is a nuisance. */

export default function Contact() {
  const { values, errors, status, message, update, setField, submit } =
    useContactForm({
    name: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });

  return (
    <Layout bodyClass={["subPage", "contactPage"]} cta={false}>
      <PageBanner title="Contact Us" trail={[{ label: "Contact Us" }]} />

      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="section-title text-center">
              <h2>Drop us a line</h2>
              <p>
                Tell us what you need handled — a payroll run, a backlog of
                books, a filing deadline, or a pipeline that has gone quiet.
              </p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-section">
                  <form className="contact-form" onSubmit={submit} noValidate>
                    <div className="form-group">
                      <input
                        id="contact-name"
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

                    <div className="form-group">
                      <input
                        id="contact-email"
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

                    <div className="form-group">
                      <input
                        id="contact-location"
                        name="location"
                        type="text"
                        className="form-control"
                        placeholder="Company or location (optional)"
                        value={values.location}
                        onChange={update("location")}
                      />
                    </div>

                    <div className="form-group">
                      <SelectField
                        groups={serviceOptionGroups()}
                        value={values.service}
                        onChange={setField("service")}
                        placeholder="Select a service (optional)"
                        ariaLabel="Which service are you interested in?"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-control form-message"
                        rows="5"
                        placeholder="What do you need handled?"
                        value={values.message}
                        onChange={update("message")}
                        aria-invalid={Boolean(errors.message)}
                      />
                      {errors.message && (
                        <span className="fx-field-error">{errors.message}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-primary"
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

              <div className="col-md-6">
                <ul className="location">
                  <li>
                    <i className="fa fa-road" aria-hidden="true"></i>
                    <div className="text">{site.contact.address}</div>
                  </li>
                  <li>
                    <i
                      className="fa fa-volume-control-phone"
                      aria-hidden="true"
                    ></i>
                    <div className="text">
                      <a href={site.contact.phoneHref}>{site.contact.phone}</a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div className="text">
                      <a href={`mailto:${site.contact.email}`}>
                        {site.contact.email}
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <div className="text">{site.contact.hours}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
