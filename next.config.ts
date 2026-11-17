import type { NextConfig } from "next";

// Empty locally and on Vercel; "/my-portfolio" when building for GitHub Pages
// (set by .github/workflows/deploy.yml).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Generates plain HTML/CSS/JS files in /out so any static host can serve them
  output: "export",
  basePath,
  // Each page is exported as /route/index.html, which GitHub Pages serves directly
  trailingSlash: true,
  // The Image Optimization API needs a server; static hosting serves files as-is
  images: { unoptimized: true },
};

export default nextConfig;
