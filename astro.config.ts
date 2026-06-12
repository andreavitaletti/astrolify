import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { siteConfig } from "./src/config/site.config";

export default defineConfig({
  // 1. Tell Astro the production URL (essential for the sitemap and SEO)
  //site: siteConfig.seo.siteUrl,
  site: "https://andreavitaletti.github.io/",
  base: "/seedpeers",
  // 2. Point the build output to your 'docs' folder
  //outDir: "./docs",
  // 3. Keep output as 'static' (this is Astro's default, but good to keep explicit)
  //output: "static",
  integrations: [sitemap()],
});
