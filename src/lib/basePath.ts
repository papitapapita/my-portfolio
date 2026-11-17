// Prefix for static files in /public when the site is served from a subpath
// (e.g. GitHub Pages: https://<user>.github.io/my-portfolio).
// next/link and the router add basePath automatically; plain <a> and
// next/image with unoptimized images do not, so we add it here.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
