import { categories, servicesIn } from "./services.js";

/* The navbar is derived from services.js rather than hand-written, so a
   service added there appears in both the desktop dropdown and the mobile
   menu automatically.

   Order is fixed by the client:
     Home · About Us · Our Services ▾ · B2B Lead Generation ▾ ·
     Financial Services ▾ · Digital Design & Development ▾ · Contact Us */

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
  {
    label: "Our Services",
    path: "/services",
    // The overview dropdown lists the three verticals, not individual
    // services — it is a category index, mirroring the client's reference.
    children: categories.map((c) => ({
      label: c.navLabel,
      path: c.path,
    })),
  },
  dropdownFor("b2b"),
  dropdownFor("financial"),
  dropdownFor("digital"),
  { label: "Contact Us", path: "/contact" },
];

export default navItems;
