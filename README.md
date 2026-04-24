# ah-template-nextjs-landing-vercel

> A lightweight, production-ready Next.js 15 landing page template. Clone, configure one file, deploy to Vercel in minutes.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ascendantventures/ah-template-nextjs-landing-vercel)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 15 | App Router, RSC, ISR |
| [React](https://react.dev) | 19 | UI library |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com) | latest | Accessible UI components |
| [next-themes](https://github.com/pacocoursey/next-themes) | ^0.4 | Dark/light mode |
| [lucide-react](https://lucide.dev) | latest | SVG icon library |
| TypeScript | ^5 | Type safety |

---

## Features

- **6 pre-built sections** — Hero, Features, Pricing, Testimonials, CTA, Footer
- **Dark / light mode** — SSR-safe, OS-preference-aware, localStorage-persisted
- **Monthly / Annual pricing toggle** — `useState`, no external state library
- **SEO out of the box** — OpenGraph, Twitter Cards, sitemap.ts, robots.txt
- **One-file configuration** — edit `src/lib/site-config.ts` to rebrand everything
- **Zero auth / zero Supabase** — no middleware guards, no `createClient` calls
- **Static export compatible** — uncomment one line in `next.config.ts`
- **Vercel one-click deploy** — button above, zero required env vars

---

## Quick Start

```bash
# Clone the template
git clone https://github.com/ascendantventures/ah-template-nextjs-landing-vercel.git my-landing

# Navigate to the project
cd my-landing

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo landing page.

---

## Customization Guide

### Step 1: Edit the site config

Open `src/lib/site-config.ts` — this single file controls **everything**:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Your Brand',          // ← site name (used in nav, footer, metadata)
  description: 'Your tagline', // ← meta description
  url: 'https://yourdomain.com',

  hero: {
    badge: 'New Launch',
    headline: 'Your main headline',
    subheadline: 'Your sub-headline...',
    primaryCta: { label: 'Get Started', href: '#pricing' },
  },

  // features, pricing, testimonials, cta, footer — all configurable here
};
```

### Step 2: Replace the OG image

Replace `public/og-image.png` with your own 1200×630 PNG.

### Step 3: Deploy

Push to GitHub, then click the **Deploy with Vercel** button above — or run:

```bash
vercel --prod
```

Zero environment variables required.

---

## Section Reference

| Component | File | Props |
|---|---|---|
| `<Hero />` | `src/components/sections/hero.tsx` | `HeroConfig` (all optional — defaults from siteConfig) |
| `<Features />` | `src/components/sections/features.tsx` | `FeaturesConfig` |
| `<Pricing />` | `src/components/sections/pricing.tsx` | `PricingConfig` |
| `<Testimonials />` | `src/components/sections/testimonials.tsx` | `TestimonialsConfig` |
| `<Cta />` | `src/components/sections/cta.tsx` | `CtaConfig` |
| `<Footer />` | `src/components/sections/footer.tsx` | `FooterConfig` |

All section types are defined in `src/types/index.ts`.

### Overriding a section from the page

```tsx
// src/app/page.tsx
import { Hero } from '@/components/sections/hero';

export default function Page() {
  return (
    <Hero
      headline="Custom headline just for this page"
      badge="Limited Offer"
    />
  );
}
```

---

## Static Export

To build a fully static site (for S3, Cloudflare Pages, GitHub Pages):

1. Open `next.config.ts`
2. Uncomment the `output: 'export'` line
3. Run `npm run build` — output goes to `/out`

> **Note:** Static export disables ISR. Remove any `export const revalidate = N` from pages before enabling.

---

## Adding a Database

This template has no database layer by design. To add Supabase:

1. Clone `ah-template-nextjs-supabase-vercel` instead for a full-stack starting point
2. Or add Supabase manually: `npm install @supabase/supabase-js @supabase/ssr`

See [Supabase docs](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs) for setup.

---

## Adding a Contact Form

For Phase 2, add a contact form using Resend:

1. `npm install resend zod`
2. Create `src/app/api/contact/route.ts`
3. Validate with `zod`, send with `resend.emails.send()`
4. Add `RESEND_API_KEY` to your Vercel env vars

---

## License

MIT — use freely in personal and commercial projects.
