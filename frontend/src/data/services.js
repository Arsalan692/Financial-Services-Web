/* ------------------------------------------------------------------
   Every service on the site, in one place.

   CategoryPage renders the three categories below and ServiceDetail
   renders the fourteen services, so adding or removing a service is an
   edit here — never a new component.

   COPY PROVENANCE, because it matters for review:
     sourced: true   → written from the material the client supplied.
     sourced: false  → drafted by us and NOT yet verified by the client.
                       Do not treat as a claim the company has made.

   The six B2B services describe the offering the client pointed us at
   (theblitzagency.com). The substance is theirs; the wording here is our
   own — their marketing copy is their property and is not reproduced.

   Every service has its own generated image under /assets/generated/.
   FALLBACK_IMAGE stays as a safety net for any service added later
   before its artwork exists.
   ------------------------------------------------------------------ */

const FALLBACK_IMAGE = "/assets/images/single-service.jpg";

export const categories = [
  {
    slug: "financial",
    path: "/services/financial",
    closing:
      "Everything runs from the records you already keep, so there is no rebuilding your history before the work can start.",
    // Reuses a representative service photograph — a category does not
    // need artwork of its own.
    image: "/assets/generated/bookkeeping.jpg",
    navLabel: "Financial Services",
    title: "Financial Services",
    icon: "fa-line-chart",
    excerpt:
      "Payroll, books, tax and reconciliation, handled from the records you already keep.",
    intro:
      "Your accounts only tell you something useful if the numbers underneath them are right. We work from the data you provide — employee records, bank statements, invoices — and turn it into payroll that runs on time, books that stay current, and reports you can make decisions from.",
  },
  {
    slug: "b2b",
    path: "/services/b2b",
    closing:
      "Each of these feeds the next: research sharpens the list, the list feeds the outreach, and the outreach fills the calendar.",
    // Reuses a representative service photograph — a category does not
    // need artwork of its own.
    image: "/assets/generated/market-research.jpg",
    navLabel: "B2B Lead Generation",
    title: "B2B Lead Generation",
    icon: "fa-handshake-o",
    excerpt:
      "Finding the businesses worth talking to, and starting the conversation.",
    intro:
      "Pipeline is a process, not a lucky month. Six services that work together: research to find who is worth approaching, lists built and verified against that, then email, LinkedIn and content to reach them — and appointments booked once someone is interested. Your team gets qualified conversations rather than raw lists.",
  },
  {
    slug: "digital",
    path: "/services/digital",
    closing:
      "Design, build and hosting are handled together, so there is no gap between whoever made the site and whoever keeps it running.",
    // Reuses a representative service photograph — a category does not
    // need artwork of its own.
    image: "/assets/generated/web-design-development.jpg",
    // Shortened for the navbar — the full name is 230px on its own and
    // crowded the other six items. Pages still use the full title.
    navLabel: "Design & Development",
    title: "Digital Design & Development",
    icon: "fa-code",
    excerpt:
      "The website your business runs on, built and kept online.",
    intro:
      "A site that loads slowly or breaks on a phone costs you the enquiry before anyone reads a word. We design and build sites that work on every screen, then keep the domain, hosting and certificates current so they stay up.",
  },
];

export const services = [
  /* ---------------- Financial Services ---------------- */
  {
    slug: "payroll-run",
    category: "financial",
    path: "/services/financial/payroll-run",
    title: "Payroll Run",
    navLabel: "Payroll Run",
    icon: "fa-money",
    image: "/assets/generated/payroll-run.jpg",
    sourced: true,
    excerpt:
      "Complete payroll — from paychecks and tax deposits through to W-2s and annual returns.",
    intro:
      "Payroll run end to end. Employee and salary data is maintained against your records, paychecks go out on schedule, tax deposits are made, and every quarterly and annual return is prepared and filed — including the year-end forms your employees need.",
    includes: [
      "Payroll data maintained — employee information, salary information and tax tables",
      "Paychecks and pay stubs printed and mailed",
      "Payment by check or ACH, whichever suits your business",
      "Federal and state tax deposits made on your behalf",
      "Quarterly tax returns prepared",
      "W-2s and 1099s prepared and mailed for all employees",
      "Annual payroll tax returns prepared",
      "Wage information reported to the state and the Social Security Administration",
      "Payroll reports generated for your records",
      "IRS notices handled rather than forwarded to you",
    ],
  },
  {
    slug: "bookkeeping",
    category: "financial",
    path: "/services/financial/bookkeeping",
    title: "Bookkeeping",
    navLabel: "Bookkeeping",
    icon: "fa-book",
    image: "/assets/generated/bookkeeping.jpg",
    sourced: true,
    excerpt:
      "Periodical closings, adjustments and full financial statements, prepared from your records.",
    intro:
      "Accounting handled end to end: your books closed on whatever cycle you work to, the adjustments and provisions that keep them accurate made as part of the close, and the final accounts you report from produced at the end of it.",
    includes: [
      "Periodical closing — monthly, quarterly, semi-annual and annual",
      "Trial balance generated for each period",
      "Adjustments for accrued expenses and liabilities",
      "Adjustments for earned income",
      "Provisions for depreciation, bad debts, amortisation and related items",
      "Financial statements and final accounts — Profit & Loss, Balance Sheet, Cash Flow and Equity statements",
    ],
  },
  {
    slug: "tax-filing",
    category: "financial",
    path: "/services/financial/tax-filing",
    title: "Tax Filing",
    navLabel: "Tax Filing",
    icon: "fa-file-text-o",
    image: "/assets/generated/tax-filing.jpg",
    sourced: true,
    // SCOPE STILL OPEN: the client is confirming which filings are in scope.
    // Sales and use tax is confirmed; anything beyond it is unconfirmed.
    scopeTodo:
      "Confirm with Ahad which filings beyond sales and use tax are in scope.",
    excerpt:
      "Sales and use tax filed on your schedule, in every state you operate in.",
    intro:
      "Sales tax is filed at whatever frequency your business is registered for, in every state you have obligations in. State notices are dealt with as part of the service rather than passed back to you.",
    includes: [
      "Filed monthly, quarterly, semi-annually or annually, to your schedule",
      "Sales and use tax handled across all states",
      "State notices handled on your behalf",
    ],
  },
  {
    slug: "ap-ar",
    category: "financial",
    path: "/services/financial/ap-ar",
    title: "Accounts Payable & Receivable",
    navLabel: "AP & AR",
    icon: "fa-exchange",
    image: "/assets/generated/ap-ar.jpg",
    sourced: false,
    excerpt:
      "Both sides of the ledger tracked, so you always know what is owed and owing.",
    intro:
      "Payables and receivables are managed together, because knowing one without the other tells you very little about your cash position. Bills and invoices are recorded, tracked and reconciled against the ledger.",
    includes: [
      "Vendor bills recorded, scheduled and tracked through to payment",
      "Customer invoices raised and monitored until settled",
      "Ageing reports so overdue balances surface early",
      "Both sides reconciled against the ledger",
    ],
  },
  {
    slug: "bank-reconciliation",
    category: "financial",
    path: "/services/financial/bank-reconciliation",
    title: "Bank Reconciliation",
    navLabel: "Bank Reconciliation",
    icon: "fa-university",
    image: "/assets/generated/bank-reconciliation.jpg",
    sourced: true,
    excerpt:
      "Every reconciliation type you need, prepared from the data you provide.",
    intro:
      "Reconciliation of any type, worked from the records you supply — bank, accrual, prepaid. Where something does not tie out, you get an explanation of why, not just a flag that it did not.",
    includes: [
      "Bank reconciliations against your statements",
      "Accrual and prepaid reconciliations",
      "Any reconciliation type, from the data you provide",
      "Discrepancies identified and explained",
    ],
  },
  {
    slug: "retail-operations",
    category: "financial",
    path: "/services/financial/retail-operations",
    title: "Retail Store Operations Management",
    navLabel: "Retail Store Operations",
    icon: "fa-cubes",
    image: "/assets/generated/retail-operations.jpg",
    sourced: true,
    excerpt:
      "Inventory movement managed, with dashboards giving full visibility of stock.",
    intro:
      "Stock moving in and out is tracked continuously, and the reporting is built around what you actually need to see. Rather than a fixed template, the dashboards are shaped to your operation.",
    includes: [
      "Inventory ins and outs managed and tracked",
      "Reports and dashboards built to your requirements",
      "Full visibility of your stock position",
      "Reporting shaped to your operation, not a fixed template",
    ],
  },

  /* ---------------- B2B Lead Generation ---------------- */
  {
    slug: "email-marketing",
    category: "b2b",
    path: "/services/b2b/email-marketing",
    title: "B2B Email Marketing",
    navLabel: "B2B Email Marketing",
    icon: "fa-envelope-o",
    image: "/assets/generated/email-marketing.jpg",
    sourced: true,
    excerpt:
      "Outbound campaigns built on a list you own, written to get replies.",
    intro:
      "Campaigns run against a list we help you build, segmented so each message is relevant to who receives it, and written to start a conversation rather than announce something. Every campaign is measured, and the sequence changes on what the numbers show.",
    includes: [
      "Email lists built and maintained against your ideal customer profile",
      "Outreach sequences and cold email templates written for reply rates",
      "Campaigns that carry a prospect through the funnel, not a single send",
      "Segmentation, so the message differs by who is reading it",
      "Open, reply and conversion reporting for every campaign",
      "Ongoing optimisation based on what the results show",
    ],
  },
  {
    slug: "appointment-setting",
    category: "b2b",
    path: "/services/b2b/appointment-setting",
    title: "B2B Appointment Setting",
    navLabel: "B2B Appointment Setting",
    icon: "fa-calendar-check-o",
    image: "/assets/generated/appointment-setting.jpg",
    sourced: true,
    excerpt:
      "Qualified meetings booked into your calendar, from first contact to confirmed slot.",
    intro:
      "We handle the whole path: identifying the right prospects, making contact by phone and email, qualifying interest, and dealing with the scheduling. Your team joins at the point where there is a conversation worth having.",
    includes: [
      "Prospects identified and approached by phone and by email",
      "Interest qualified before anything reaches your calendar",
      "Meetings booked with decision-makers, logistics handled",
      "Outreach shaped around your goals and target audience",
      "Reschedules and no-shows followed up",
      "Background notes passed over so your team arrives briefed",
    ],
  },
  {
    slug: "market-research",
    category: "b2b",
    path: "/services/b2b/market-research",
    title: "B2B Market Research",
    navLabel: "B2B Market Research",
    icon: "fa-pie-chart",
    image: "/assets/generated/market-research.jpg",
    sourced: true,
    excerpt:
      "Market, competitor and customer analysis, delivered as findings you can act on.",
    intro:
      "Research scoped to a question you actually need answered. Primary work — surveys and interviews — is combined with published market data, then analysed into findings and recommendations rather than handed over as a pile of charts.",
    includes: [
      "Market analysis: trends, opportunities and where the pressure is",
      "Competitive landscape, and where you sit within it",
      "Customer research into who buys and why",
      "Segmentation, so your audience is grouped by something useful",
      "Primary and secondary methods — surveys, interviews, published data",
      "A written report with findings and clear recommendations",
    ],
  },
  {
    slug: "content-marketing",
    category: "b2b",
    path: "/services/b2b/content-marketing",
    title: "B2B Content Marketing",
    navLabel: "B2B Content Marketing",
    icon: "fa-pencil-square-o",
    image: "/assets/generated/content-marketing.jpg",
    sourced: true,
    excerpt:
      "A content plan, the content itself, and a calendar that keeps it publishing.",
    intro:
      "It starts with the audience and what they search for, becomes a plan with goals attached, then gets written and published against a calendar. Articles, whitepapers and case studies that give a buyer a reason to take you seriously.",
    includes: [
      "Content strategy built on audience and competitor research",
      "A content calendar with goals and measures attached to it",
      "Articles, blogs, whitepapers and case studies written for a B2B reader",
      "Content mapped to the buyer journey, from first awareness to shortlist",
      "Distribution, not just publication",
      "Performance reviewed so the plan moves with the evidence",
    ],
  },
  {
    slug: "linkedin-automation",
    category: "b2b",
    path: "/services/b2b/linkedin-automation",
    title: "LinkedIn Automation",
    navLabel: "LinkedIn Automation",
    icon: "fa-linkedin",
    image: "/assets/generated/linkedin-automation.jpg",
    sourced: true,
    excerpt:
      "Consistent, personal LinkedIn outreach at a volume nobody can keep up by hand.",
    intro:
      "Targeted outreach to the people who match your buyer profile, with sequences written to read personally. Your profile is set up to support it, activity stays consistent week to week, and the moment someone replies the conversation belongs to a person again.",
    includes: [
      "Targeting by industry, role and seniority against your buyer profile",
      "Personalised connection and message sequences, not generic templates",
      "Profile optimised so the outreach lands against something credible",
      "Consistent activity week to week rather than in bursts",
      "Conversations handed to your team as soon as a prospect replies",
      "Performance monitored and the sequence adjusted on the results",
    ],
  },
  {
    slug: "prospect-list-building",
    category: "b2b",
    path: "/services/b2b/prospect-list-building",
    title: "Prospect & List Building",
    navLabel: "Prospect & List Building",
    icon: "fa-list-ul",
    image: "/assets/generated/prospect-list-building.jpg",
    sourced: true,
    excerpt:
      "Verified prospect lists, segmented and ready to load into your CRM.",
    intro:
      "Contacts sourced against criteria you set, verified before they reach you, and segmented so your messaging can differ by audience. Delivered structured for your CRM, so nothing has to be retyped before it can be used.",
    includes: [
      "Prospects sourced against your ideal customer criteria",
      "Details verified, and the data cleaned and deduplicated",
      "Segmentation, so messaging can differ by audience",
      "Structured for your CRM and ready to load",
      "Nurture sequences set up against the list",
      "Ongoing maintenance as the data ages",
    ],
  },

  /* ---------------- Digital Design & Development ---------------- */
  {
    slug: "web-design-development",
    category: "digital",
    path: "/services/digital/web-design-development",
    title: "Website Design & Development",
    navLabel: "Website Design & Development",
    icon: "fa-code",
    image: "/assets/generated/web-design-development.jpg",
    sourced: false,
    excerpt:
      "Websites designed and built to work on every screen and load quickly.",
    intro:
      "Design and build handled together, from first layout through to launch. The result works on a phone as well as it does on a desktop, loads quickly, and can be updated by you afterwards.",
    includes: [
      "Design and build, from first layout to launch",
      "Works on phones, tablets and desktop",
      "Built for speed and search visibility",
      "Content you can update yourself after launch",
    ],
  },
  {
    slug: "hosting-and-domain",
    category: "digital",
    path: "/services/digital/hosting-and-domain",
    title: "Hosting and Domain",
    navLabel: "Hosting and Domain",
    icon: "fa-server",
    image: "/assets/generated/hosting-and-domain.jpg",
    sourced: false,
    excerpt:
      "Domains registered and sites hosted, kept online and kept current.",
    intro:
      "Domain and hosting managed as one job, so nothing lapses quietly. Certificates stay valid, backups run, and the site is monitored rather than checked on when someone notices it is down.",
    includes: [
      "Domain registration and renewal managed",
      "Hosting configured and maintained",
      "SSL certificates issued and kept valid",
      "Backups, updates and uptime monitoring",
    ],
  },
];

/* ---------------- lookups used by the router and nav ---------------- */

export const getCategory = (slug) =>
  categories.find((c) => c.slug === slug);

export const servicesIn = (categorySlug) =>
  services.filter((s) => s.category === categorySlug);

export const getService = (categorySlug, serviceSlug) =>
  services.find(
    (s) => s.category === categorySlug && s.slug === serviceSlug,
  );

export const serviceImage = (service) => service.image ?? FALLBACK_IMAGE;

/* Grouped options for the contact forms' service picker, shaped the way
   SelectField expects. */
export const serviceOptionGroups = () =>
  categories.map((category) => ({
    label: category.title,
    options: servicesIn(category.slug).map((s) => ({
      value: s.slug,
      label: s.title,
    })),
  }));

export default services;
