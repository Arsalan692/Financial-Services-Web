import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { OG_IMAGE, SITE_URL, seoFor } from "../data/seo.js";

/* Keeps <title>, the description, canonical and the social-preview tags
   in step with the current route as the visitor navigates client-side.

   The first load already carries the right tags — the build writes them
   into each route's own HTML file (see vite.config.js) — so this only
   UPDATES existing tags rather than appending new ones, which would leave
   duplicates in <head>. */

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (content == null) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function useSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = seoFor(pathname);
    const url = page.noindex ? null : `${SITE_URL}${page.path}`;

    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", page.noindex ? "noindex" : null);
    setCanonical(url);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", url ?? `${SITE_URL}${pathname}`);
    setMeta("property", "og:image", `${SITE_URL}${OG_IMAGE}`);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
  }, [pathname]);
}
