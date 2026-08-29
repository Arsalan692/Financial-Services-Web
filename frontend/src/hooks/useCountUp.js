import { useEffect, useRef, useState } from "react";

/* The theme animated its `.timer` figures with a jQuery counter plugin.
   This counts up once the element scrolls into view, then stops.

   Honours `prefers-reduced-motion` by showing the final value
   immediately — a number ticking upward is decoration, not information. */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function useCountUp(target, { duration = 1600 } = {}) {
  const ref = useRef(null);
  // Someone who has asked for less motion starts at the final figure, so
  // there is nothing to animate and no state to set from an effect.
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    let frame;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          // Ease out, so it decelerates into the final figure.
          setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return [ref, value];
}
