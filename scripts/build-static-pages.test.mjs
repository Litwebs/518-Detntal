import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { runInNewContext } from "node:vm";
import { buildStaticPages, redirectHtml } from "./build-static-pages.mjs";
import { pages, legacyRedirects, siteOrigin } from "../src/data/siteRoutes.js";

test("every public route has a real entry and old Google links have HTML redirects", async () => {
  const directory = await mkdtemp(join(process.cwd(), ".route-test-"));
  try {
    await writeFile(join(directory, "index.html"), '<html><head><title>Home</title></head><body><div id="root"></div><script type="module" src="/assets/app.js"></script></body></html>');
    await buildStaticPages(directory);
    for (const page of pages) {
      const html = await readFile(join(directory, page.path.slice(1), "index.html"), "utf8");
      assert.ok(html.includes(`href="${siteOrigin}${page.path}"`), page.path);
      assert.ok(html.includes('src="/assets/app.js"'), "nested entries retain absolute asset URLs");
    }
    for (const [oldPath, target] of Object.entries(legacyRedirects)) {
      const html = await readFile(join(directory, oldPath.slice(1), "index.html"), "utf8");
      assert.ok(html.includes('http-equiv="refresh"'), oldPath);
      assert.ok(html.includes(`href="${siteOrigin}${target}"`), oldPath);
      assert.ok(pages.some((page) => page.path === target.split("#")[0]), "redirect must point to a real page");
    }
    const sitemap = await readFile(join(directory, "sitemap.xml"), "utf8");
    assert.equal((sitemap.match(/<loc>/g) || []).length, pages.length);
    assert.ok(!sitemap.includes(".php"));
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("redirects preserve queries and select the intended treatment", () => {
  for (const target of ["/treatments/#clear-aligners", "/about/"]) {
    let redirected;
    const html = redirectHtml(target);
    const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
    runInNewContext(script, { URL, window: { location: { search: "?utm_source=google", hash: "#existing", replace: (url) => { redirected = url; } } } });
    const destination = new URL(redirected);
    assert.equal(destination.search, "?utm_source=google");
    assert.equal(destination.hash, target.includes("#") ? "#clear-aligners" : "#existing");
    assert.equal(destination.origin, siteOrigin);
  }
});
