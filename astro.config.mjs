import { defineConfig } from "astro/config";

// GitHub Pages serves this site from a /wk-painting-services-website subpath;
// Cloudflare Pages serves it from the wk-painting-services.com root. The GH Pages
// workflow sets DEPLOY_TARGET=github-pages at build time to pick the right one.
const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  site: isGitHubPages
    ? "https://kaylasear.github.io"
    : "https://wk-painting-services.com",
  base: isGitHubPages ? "/wk-painting-services-website" : "/",
});
