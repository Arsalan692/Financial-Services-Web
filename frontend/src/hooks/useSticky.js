import { useEffect, useState } from "react";

/* The template added a `sticky` class to the nav once the page had
   scrolled past the navbar's own height, which pins it to the top. Same
   rule here, minus jQuery.

   The scroll handler is passive and only writes state when the value
   actually flips, so it does not re-render on every scroll event. */

export default function useSticky(ref) {
  const [stuck, setStuck] = useState(false);
  // Returned alongside, so the caller can reserve the space without
  // reading the ref during render.
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const measured = el.offsetHeight;
    setHeight(measured);

    const onScroll = () => {
      const next = window.scrollY > measured;
      setStuck((was) => (was === next ? was : next));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return { stuck, height };
}
