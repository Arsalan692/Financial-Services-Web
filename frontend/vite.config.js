import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

/* Per-route SEO, written at build time.

   The site is a single-page app, so every route used to be served the
   same index.html with the same <title> and no description. Search
   engines and, above all, link previews (LinkedIn, WhatsApp) read that
   raw HTML without running the app. After the bundle is written this
   copies index.html once per route with that route's tags filled in
   (`about.html`, `services/b2b/email-marketing.html`, ...), which the host
   serves for the matching clean URL. It also writes sitemap.xml and
   robots.txt from the same route list, so they can never drift.

   Lives here as a plugin rather than a package.json script so it runs
   however the host invokes the build. */
function seoPages() {
  let outDir = "dist";
  return {
    name: "skyledger-seo-pages",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const { seoPages: pages, headTags, SITE_URL } = await import(
        "./src/data/seo.js"
      );
      const indexPath = path.join(outDir, "index.html");
      const template = fs.readFileSync(indexPath, "utf8");
      const block = /<!-- seo:start[\s\S]*?<!-- seo:end -->/;
      if (!block.test(template)) {
        throw new Error("seoPages: seo:start/seo:end markers missing from index.html");
      }

      for (const page of pages) {
        const html = template.replace(block, headTags(page));
        const file =
          page.path === "/"
            ? indexPath
            : path.join(outDir, `${page.path.slice(1)}.html`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      }

      const today = new Date().toISOString().slice(0, 10);
      const urls = pages
        .map(
          (p) =>
            `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`,
        )
        .join("\n");
      fs.writeFileSync(
        path.join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      fs.writeFileSync(
        path.join(outDir, "robots.txt"),
        `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      );

      console.log(`seoPages: ${pages.length} route pages, sitemap.xml, robots.txt`);
    },
  };
}

export default defineConfig({
  plugins: [react(), seoPages()],
  server: {
    // The contact forms post to a relative /api path so the same code
    // works in development and in production. In development that is
    // proxied to the FastAPI app; in production the two are served
    // under one origin (or ALLOWED_ORIGINS covers the split).
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
});
