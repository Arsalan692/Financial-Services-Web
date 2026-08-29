/* About-page FAQ. The theme drove its accordion with jQuery UI; this is
   plain data and a little React state instead.

   These answers describe how the firm works rather than making claims
   about results, so they are safe to publish as written. Anything that
   becomes a promise — turnaround times, pricing, guarantees — needs the
   client's sign-off first. */

export const faqs = [
  {
    q: "Do we have to move off our current accounting software?",
    a: "No. We work in whatever you already use. Moving systems is a project in itself, and it is rarely worth doing at the same time as handing over the bookkeeping.",
  },
  {
    q: "What do you need from us to get started?",
    a: "For payroll, your employee and salary data. For bookkeeping, your bank statements and whatever records you keep alongside them. We work from what you have rather than asking you to reconstruct anything first.",
  },
  {
    q: "Can we use you for one service rather than all of them?",
    a: "Yes. Plenty of clients start with a single piece — a payroll run or a backlog of books — and add to it later. Nothing is bundled.",
  },
  {
    q: "Who deals with notices from the IRS or a state?",
    a: "We do. Notices are handled as part of the service rather than forwarded to you to interpret.",
  },
  {
    q: "Can the same team handle both our accounting and our lead generation?",
    a: "Yes, and that is usually why people come to us. The accounting keeps the business compliant and the lead generation keeps it growing — running both through one relationship saves you managing three vendors.",
  },
];

export default faqs;
