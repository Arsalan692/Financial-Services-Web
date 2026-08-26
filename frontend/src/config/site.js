/* ------------------------------------------------------------------
   Every company-specific detail lives here and nowhere else.
   All values below are PLACEHOLDERS. When the real company name,
   logo and contact details arrive, this is the only file to edit —
   no component hardcodes any of it.
   ------------------------------------------------------------------ */

export const site = {
  // "Fintechly" is a working name, confirmed as a placeholder.
  name: "Fintechly",
  tagline: "Accounting, lead generation and web services",

  // The theme ships a logo lockup reading "CONSULTING / we are your
  // business helper". It is a placeholder until a real logo exists.
  logo: "/assets/images/logo.png",
  logoFooter: "/assets/images/footer-logo.png",

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

  // Contact form posts here in phase 7. Until the FastAPI backend
  // exists the form validates and reports success without a network call.
  contactEndpoint: "/api/contact",
};

export default site;
