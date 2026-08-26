import { useEffect } from "react";

/* The theme scopes a large amount of its CSS behind a class on <body>:
   the homepage is `homePageFive`, and every inner page is `subPage`
   plus a page-specific class (`aboutPage`, `servicePage`, `contactPage`).
   Without this the nav sits at the wrong height and section backgrounds
   come out wrong, so each page declares its body classes and this hook
   applies them for as long as that page is mounted. */
export default function useBodyClass(classNames) {
  // Normalised to a stable string so the dependency can be checked
  // statically, and so a fresh array literal each render does not
  // re-trigger the effect.
  const key = (Array.isArray(classNames) ? classNames : [classNames])
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    if (!key) return undefined;

    const names = key.split(" ");
    document.body.classList.add(...names);
    return () => document.body.classList.remove(...names);
  }, [key]);
}
