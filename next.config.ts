import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ── Static Export (opt-in) ───────────────────────────────────────────────────
  // Uncomment the line below to build a fully static site for CDN / S3 / GitHub Pages.
  // When enabled: remove any ISR (revalidate exports) and server-only features.
  // output: 'export',

  // ── Images ───────────────────────────────────────────────────────────────────
  images: {
    // Add external image domains here if using remote avatars/images.
    // Example:
    // remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    unoptimized: false,
  },

  // ── TypeScript ───────────────────────────────────────────────────────────────
  typescript: {
    ignoreBuildErrors: false, // always fix TS errors — never skip
  },

  // ── ESLint ────────────────────────────────────────────────────────────────────
  eslint: {
    ignoreDuringBuilds: false, // always fix lint errors — never skip
  },
};

export default nextConfig;
