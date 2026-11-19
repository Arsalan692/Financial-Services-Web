import { categories, servicesIn } from "./services.js";

/* The navbar is derived from services.js rather than hand-written, so a
   service added there appears in both the desktop dropdown and the mobile
   menu automatically.

   Order:
     Home · About Us · B2B Lead Generation ▾ · Financial Services ▾ ·
     Design & Development ▾ · Contact Us

   "Our Services" was dropped from the menu (2026-11-19): its dropdown only
   repeated the three category tabs beside it. The /services overview page
   still exists and is linked from the homepage and the footer. */

const categoryBySlug = (slug) => categories.find((c) => c.slug === slug);

const dropdownFor = (slug) => {
  const category = categoryBySlug(slug);
  return {
    label: category.navLabel,
    path: category.path,
    children: servicesIn(slug).map((s) => ({
      label: s.navLabel,
      path: s.path,
    })),
  };
};

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  dropdownFor("b2b"),
  dropdownFor("financial"),
  dropdownFor("digital"),
  { label: "Contact Us", path: "/contact" },
];

export default navItems;
