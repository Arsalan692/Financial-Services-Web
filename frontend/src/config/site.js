/* ------------------------------------------------------------------
   Every company-specific detail lives here and nowhere else.
   All values below are PLACEHOLDERS. When the real company name,
   logo and contact details arrive, this is the only file to edit —
   no component hardcodes any of it.
   ------------------------------------------------------------------ */

export const site = {
  // Confirmed 2026-09-04, replacing the earlier "Fintechly Digitals".
  name: "Skyledger Consultants",
  tagline: "Accounting, lead generation and web services",

  /* Traced to vector from the supplied artwork, which is archived at
     assets-source/brand/skyledger-logo-supplied.png. The original stacks
     the wordmark under the mark; these lay it out horizontally, because
     stacked leaves "CONSULTANTS" about four pixels tall at navbar size.
     Text is outlined rather than set live: an SVG inside an <img> cannot
     load the webfont the rest of the page uses. */
  logo: "/assets/generated/logo.svg",
  logoFooter: "/assets/generated/logo-light.svg",

  contact: {
    // Real details, supplied 2026-11-18.
    phone: "(518) 974-6202 ext. 800",
    phoneHref: "tel:+15189746202,800",
    email: "info@skyledgerconsultants.com",
    address: "Malvern, PA",
    hours: "Mon–Fri: 9 am – 6 pm",
  },

  // Only profiles that exist. Facebook and X were placeholder links to
  // "#"; add them back here if the company opens those accounts.
  social: [
    {
      label: "LinkedIn",
      icon: "fa-linkedin",
      href: "https://www.linkedin.com/company/skyledger-consultants/",
    },
  ],

  /* Headline figures on the About page. Supplied by the client
     2026-11-18. "Areas of expertise" is their figure, not a count of
     the categories in services.js (which has three). */
  stats: [
    { icon: "1.png", value: 50, suffix: "+", label: "Clients served", placeholder: false },
    { icon: "2.png", value: 5, suffix: "+", label: "Years in business", placeholder: false },
    { icon: "3.png", value: 14, suffix: "", label: "Services offered", placeholder: false },
    { icon: "4.png", value: 5, suffix: "", label: "Areas of expertise", placeholder: false },
  ],

  // Contact form posts here in phase 7. Until the FastAPI backend
  // exists the form validates and reports success without a network call.
  contactEndpoint: "/api/contact",
};

export default site;
