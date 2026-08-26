import { useEffect, useRef } from "react";

/* Replaces WOW.js.

   The theme's markup carries animate.css classes that WOW.js used to
   trigger once an element scrolled into view. WOW is jQuery-bound and
   mutates the DOM directly, so instead this hook watches the element
   with an IntersectionObserver and adds `fx-revealed` when it arrives.
   theme.css keeps `.fx-reveal` transparent until then.

   Unlike WOW.js it honours `prefers-reduced-motion`: if the viewer has
   asked for less motion the element is simply shown, never animated. */

export default function useReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      el.classList.add("fx-revealed");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("fx-revealed");
          // One-shot: the theme's animations are entrances, not loops.
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
