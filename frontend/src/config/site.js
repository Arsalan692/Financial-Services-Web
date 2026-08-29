/* ------------------------------------------------------------------
   Every company-specific detail lives here and nowhere else.
   All values below are PLACEHOLDERS. When the real company name,
   logo and contact details arrive, this is the only file to edit —
   no component hardcodes any of it.
   ------------------------------------------------------------------ */

export const site = {
  // Confirmed 2026-08-29. Domain likely fintechlydigitals.com.
  name: "Fintechly Digitals",
  tagline: "Accounting, lead generation and web services",

  /* Built as SVG rather than generated: sharp at any size, a kilobyte
     each, and the footer variant is the same file recoloured. Set in
     Poppins, which the site already loads. */
  logo: "/assets/generated/logo.svg",
  logoFooter: "/assets/generated/logo-light.svg",

  contact: {
    phone: "+1 (555) 010 0100",
    phoneHref: "tel:+15550100100",
    email: "hello@example.com",
    // Keep this roughly the length of the theme's own "251 S Olive St,
    // Los Angeles" — the top bar gives it one line before it wraps.
    address: "100 Example St, Springfield",
    hours: "Mon–Fri: 9 am – 6 pm",
  },

  social: [
    { label: "LinkedIn", icon: "fa-linkedin", href: "#" },
    { label: "Facebook", icon: "fa-facebook", href: "#" },
    { label: "X", icon: "fa-twitter", href: "#" },
  ],

  /* Headline figures on the About page.
     ⚠ The first two are STAND-IN NUMBERS, set at the client's request so
     the section reads properly during review. They are factual claims
     about the business and MUST be replaced with real figures, or the
     section removed, before this site goes live. */
  stats: [
    { icon: "1.png", value: 120, suffix: "+", label: "Clients served", placeholder: false },
    { icon: "2.png", value: 8, suffix: "+", label: "Years in business", placeholder: false },
    { icon: "3.png", value: 14, suffix: "", label: "Services offered", placeholder: false },
    { icon: "4.png", value: 3, suffix: "", label: "Areas of expertise", placeholder: false },
  ],

  // Contact form posts here in phase 7. Until the FastAPI backend
  // exists the form validates and reports success without a network call.
  contactEndpoint: "/api/contact",
};

export default site;
