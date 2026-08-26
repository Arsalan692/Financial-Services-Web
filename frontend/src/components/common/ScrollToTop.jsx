import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* A multi-page site scrolls to the top on navigation. A single-page app
   does not, unless told to — without this you land halfway down every
   page you click through to. */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
