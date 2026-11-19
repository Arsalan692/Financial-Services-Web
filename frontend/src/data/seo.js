/* ------------------------------------------------------------------
   Search and link-preview metadata for every route, in one place.

   Used twice:
     - at build time by the `seoPages` plugin in vite.config.js, which
       writes each route's tags into its own static HTML file. Link
       previews (LinkedIn, WhatsApp, Slack) read that raw HTML and never
       run the app, so the tags must be there before any JavaScript.
     - in the browser by useSeo(), which keeps the same tags in step as
       the visitor moves between pages without a reload.

   Plain JS with no JSX or asset imports, so Node can load it directly.
   Descriptions are built from copy already on the site — no new claims.
   ------------------------------------------------------------------ */

import site from "../config/site.js";
import { categories, services } from "./services.js";

export const SITE_URL = "https://skyledgerconsultants.com";
export const OG_IMAGE = "/og-image.png";

const brand = site.name;

const CATEGORY_TAIL = {
  financial: `Financial services from ${brand}.`,
  b2b: `B2B lead generation from ${brand}.`,
  digital: `Website design and hosting from ${brand}.`,
};

const fixedPages = [
  {
    path: "/",
    title: `${brand} | Accounting & B2B Lead Generation`,
    description:
      "We handle the accounting that keeps a business running and the outreach that keeps it growing: payroll, bookkeeping, tax, B2B lead generation and web services.",
    priority: "1.0",
  },
  {
    path: "/about",
    title: `About Us | ${brand}`,
    description:
      "The accounting that keeps you compliant, and the outreach that keeps you growing. 50+ clients served over 5+ years, worked from the records you already keep.",
    priority: "0.8",
  },
  {
    path: "/services",
    title: `Our Services | ${brand}`,
    description:
      "Fourteen services across three areas: financial services, B2B lead generation, and design & development. Take one of them or all of them, nothing is bundled.",
    priority: "0.9",
  },
  {
    path: "/contact",
    title: `Contact Us | ${brand}`,
    description: `Tell us what you need handled: payroll, books, tax, lead generation or your website. Call ${site.contact.phone} or email ${site.contact.email}.`,
    priority: "0.8",
  },
];

const categoryPages = categories.map((c) => ({
  path: c.path,
  title: `${c.title} | ${brand}`,
  description: `${c.excerpt} ${CATEGORY_TAIL[c.slug] ?? ""}`.trim(),
  priority: "0.9",
}));

const servicePages = services.map((s) => {
  const category = categories.find((c) => s.path.startsWith(`${c.path}/`));
  return {
    path: s.path,
    title: `${s.title} | ${brand}`,
    description: `${s.excerpt} ${CATEGORY_TAIL[category?.slug] ?? ""}`.trim(),
    priority: "0.7",
  };
});

/** Every indexable route, in sitemap order. */
export const seoPages = [...fixedPages, ...categoryPages, ...servicePages];

const notFound = {
  path: null,
  title: `Page not found | ${brand}`,
  description: "The page you were looking for is not here.",
  noindex: true,
};

/** Metadata for a pathname; unknown paths get the noindex 404 entry. */
export function seoFor(pathname) {
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  return seoPages.find((p) => p.path === clean) ?? notFound;
}

/* Structured data so search engines can read who the business is. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand,
  url: SITE_URL,
  logo: `${SITE_URL}${site.logo}`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description: fixedPages[0].description,
  email: site.contact.email,
  telephone: "+1-518-974-6202 ext. 800",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malvern",
    addressRegion: "PA",
    addressCountry: "US",
  },
  sameAs: site.social.map((s) => s.href),
};

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** The <head> tags for one page, as an HTML string (used at build time). */
export function headTags(page) {
  const url = `${SITE_URL}${page.path ?? "/"}`;
  const image = `${SITE_URL}${OG_IMAGE}`;
  const tags = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    page.noindex
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(brand)}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(`${brand}: ${site.tagline}`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];
  if (page.path === "/") {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c")}</script>`,
    );
  }
  return tags.join("\n    ");
}
