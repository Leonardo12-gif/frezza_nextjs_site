/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  // Recommended for GitHub Pages if using next/image
  images: {
    unoptimized: true,
  },
  // Set basePath and assetPrefix if your site is served from a sub-path on GitHub Pages
  // e.g., https://username.github.io/repository-name/
  // The repository name is "frezza-digital-growth-hub"
  basePath: "/frezza_digitalnextjs_site",
  assetPrefix: "//frezza_digitalnextjs_site/",
  // trailingSlash: true, // Optional: if you prefer URLs with a trailing slash
};

export default nextConfig;

