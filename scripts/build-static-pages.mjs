import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";
import { pages, legacyRedirects, siteOrigin } from "../src/data/siteRoutes.js";

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export function pageHtml(template, page) {
  const canonical = siteOrigin + page.path;
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  html = html.replace(/<link\b[^>]*rel="canonical"[^>]*>/gi, "");
  for (const [attribute, name, value] of [
    ["name", "description", page.description],
    ["property", "og:title", page.title],
    ["property", "og:description", page.description],
    ["property", "og:url", canonical],
    ["name", "twitter:title", page.title],
    ["name", "twitter:description", page.description],
  ]) {
    const tag = `<meta ${attribute}="${name}" content="${escapeHtml(value)}">`;
    const pattern = new RegExp(`<meta\\b[^>]*${attribute}="${name}"[^>]*>`, "i");
    html = pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `${tag}\n</head>`);
  }
  return html.replace("</head>", `<link rel="canonical" href="${canonical}">\n</head>`);
}

export function redirectHtml(target) {
  const destination = new URL(target, siteOrigin).href;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>518 Dental — Page moved</title><link rel="canonical" href="${escapeHtml(destination)}">
<meta http-equiv="refresh" content="0; url=${escapeHtml(destination)}">
<script>const target = new URL(${JSON.stringify(destination)}); target.search = window.location.search; if (!target.hash) target.hash = window.location.hash; window.location.replace(target.href);</script>
</head><body><p>This page has moved. <a href="${escapeHtml(destination)}">Continue to 518 Dental</a>.</p></body></html>\n`;
}

export async function buildStaticPages(distDirectory = resolve("dist")) {
  const template = await readFile(join(distDirectory, "index.html"), "utf8");
  for (const page of pages) {
    const directory = join(distDirectory, page.path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "index.html"), pageHtml(template, page));
  }
  for (const [oldPath, target] of Object.entries(legacyRedirects)) {
    // A directory index is served as HTML by GitHub Pages even for a .php URL.
    // A literal .php file can instead be served as a download.
    const directory = join(distDirectory, oldPath.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "index.html"), redirectHtml(target));
  }
  await writeFile(join(distDirectory, "404.html"), template);
  await writeFile(join(distDirectory, ".nojekyll"), "");
  await writeFile(join(distDirectory, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((page) => `  <url><loc>${siteOrigin}${page.path}</loc></url>`).join("\n")}\n</urlset>\n`);
  console.log(`Prepared ${pages.length} page entries and ${Object.keys(legacyRedirects).length} legacy redirects.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await buildStaticPages();
}
