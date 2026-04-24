# SPEC: ah-template-nextjs-landing-vercel
**Version:** 1.0.0  
**Date:** 2026-04-24  
**Author:** Architect Agent  
**Output Path:** `/tmp/factory-builds/landing-template-v2/`  
**Destination Repo:** `ah-template-nextjs-landing-vercel`  
**Project Slug (for any future DB tables):** `lp` (e.g., `lp_submissions`)

---

## 0. Overview

A lightweight, production-grade GitHub repository **template** for marketing landing pages. Built on Next.js 15 App Router with React 19, Tailwind CSS v4, and shadcn/ui. Designed for zero-friction cloning: no Supabase, no authentication, no middleware guards. Developers fork this template, replace content in a single config file, and deploy to Vercel in under 10 minutes.

The template ships with a **demo landing page** that assembles every pre-built section so new users can see what they get immediately after cloning.

### Assumptions
1. The primary deploy target is **Vercel**; the template is also compatible with any Node.js host via `next start`.
2. **Static export (`output: 'export'`)** is **opt-in** via a one-line change in `next.config.ts`; the default is standard Next.js server mode to preserve ISR capability.
3. Dark/light mode persists in `localStorage` via `next-themes`.
4. All icons use `lucide-react` — zero emoji icons anywhere (PATTERN 13).
5. Tailwind v4 configuration lives in `globals.css` using `@theme {}` blocks — no `tailwind.config.js` (PATTERN 17).
6. No `.env` file is required for Phase 1. The template has no runtime secrets.
7. The existing `ah-template-nextjs-supabase-vercel` repo is not accessible from this build environment; the structure described here is derived from Next.js 15 App Router conventions and production incident patterns.

---

## 1. Requirements

### 1.1 Functional Requirements

---

**REQ-LPT-001: Pre-built Section Components**
- User story: "As a developer, I want ready-made landing page sections so that I can assemble a full page without writing layout from scratch."
- Acceptance Criteria:
  - `AC-001.1`: When the demo page renders, it SHALL display all six sections in order: Hero → Features → Pricing → Testimonials → CTA → Footer.
  - `AC-001.2`: Each section component SHALL accept a typed props interface so consumers can pass custom content without modifying internals.
  - `AC-001.3`: Every section SHALL render correctly at viewport widths 375px, 768px, 1024px, and 1440px (mobile-first breakpoints).

---

**REQ-LPT-002: Hero Section**
- User story: "As a developer, I want a Hero section with headline, sub-headline, badge, and dual CTAs so that I can communicate value immediately."
- Acceptance Criteria:
  - `AC-002.1`: Hero SHALL render a badge/pill label, H1 headline, sub-headline paragraph, primary CTA button, and optional secondary CTA link.
  - `AC-002.2`: Hero SHALL support an optional decorative image or gradient background — configurable via props.
  - `AC-002.3`: Primary CTA button SHALL use `Button` from shadcn/ui with `variant="default"`.
  - `AC-002.4`: Secondary CTA SHALL use `Button` with `variant="ghost"` and a `lucide-react` ArrowRight icon.

---

**REQ-LPT-003: Features Section**
- User story: "As a developer, I want a Features grid so that I can highlight product capabilities."
- Acceptance Criteria:
  - `AC-003.1`: Features section SHALL render a configurable array of feature items (icon, title, description).
  - `AC-003.2`: Features SHALL lay out in a 1-column grid on mobile, 2-column on tablet, 3-column on desktop.
  - `AC-003.3`: Each feature icon SHALL be a `lucide-react` component passed via props as a React element — never a string or emoji.
  - `AC-003.4`: A `Badge` from shadcn/ui SHALL appear above the section headline as a category label.

---

**REQ-LPT-004: Pricing Section**
- User story: "As a developer, I want pricing cards with monthly/annual toggle so that I can present tiered plans."
- Acceptance Criteria:
  - `AC-004.1`: Pricing section SHALL render 3 tier cards (Starter, Pro, Enterprise by default).
  - `AC-004.2`: A toggle control SHALL switch between monthly and annual pricing; annual SHALL show a calculated discount label.
  - `AC-004.3`: The highlighted/recommended tier SHALL have a distinct visual treatment (ring, background, or badge).
  - `AC-004.4`: Each card SHALL include a CTA button linking to a configurable `href`.
  - `AC-004.5`: Toggle state SHALL be managed with React `useState` — no external state library needed.

---

**REQ-LPT-005: Testimonials Section**
- User story: "As a developer, I want a Testimonials section so that I can provide social proof."
- Acceptance Criteria:
  - `AC-005.1`: Testimonials section SHALL render a configurable array of testimonials (quote, author name, role, company, optional avatar URL).
  - `AC-005.2`: Layout SHALL be a responsive grid: 1-column on mobile, 2-column on tablet, 3-column on desktop.
  - `AC-005.3`: When no avatar URL is provided, an avatar placeholder using the author's initials SHALL be shown using a `lucide-react` `User` icon fallback — no `<img>` broken state.
  - `AC-005.4`: Each testimonial card SHALL use `Card` from shadcn/ui.

---

**REQ-LPT-006: CTA Section**
- User story: "As a developer, I want a full-width call-to-action banner so that I can drive final conversions."
- Acceptance Criteria:
  - `AC-006.1`: CTA section SHALL render a headline, supporting text, and a primary CTA button.
  - `AC-006.2`: CTA SHALL support a configurable gradient or solid background via a prop (`variant: 'gradient' | 'solid' | 'muted'`).
  - `AC-006.3`: CTA button SHALL be navigable to an external URL or an internal anchor link.

---

**REQ-LPT-007: Footer Section**
- User story: "As a developer, I want a Footer so that I can provide navigation links, social links, and legal text."
- Acceptance Criteria:
  - `AC-007.1`: Footer SHALL render a logo/brand name, navigation link columns, social icon links (using `lucide-react` icons), and a copyright line.
  - `AC-007.2`: Footer columns SHALL be configurable via the `siteConfig` object (column title + array of `{label, href}` pairs).
  - `AC-007.3`: Footer SHALL stack to a single column on mobile.

---

**REQ-LPT-008: Navigation Bar**
- User story: "As a developer, I want a sticky top navigation bar so that visitors can jump to sections at any time."
- Acceptance Criteria:
  - `AC-008.1`: Navbar SHALL be sticky (position: sticky; top: 0) with a backdrop blur effect.
  - `AC-008.2`: Navbar SHALL display the site name/logo on the left, nav links in the center (desktop), and the theme toggle + CTA button on the right.
  - `AC-008.3`: On mobile, nav links SHALL collapse into a hamburger menu (`lucide-react` `Menu` icon) that opens a slide-down or sheet drawer.
  - `AC-008.4`: The mobile menu SHALL use `Sheet` from shadcn/ui.

---

**REQ-LPT-009: Dark/Light Mode Toggle**
- User story: "As a visitor, I want to toggle between dark and light mode so that I can use the site comfortably in any environment."
- Acceptance Criteria:
  - `AC-009.1`: The theme toggle SHALL use `next-themes` `useTheme()` hook.
  - `AC-009.2`: Toggle SHALL display a `lucide-react` `Sun` icon in dark mode and a `Moon` icon in light mode.
  - `AC-009.3`: Theme preference SHALL persist across page reloads via `localStorage`.
  - `AC-009.4`: The `ThemeProvider` SHALL be configured with `attribute="class"` and `defaultTheme="system"` to respect OS preference on first visit.
  - `AC-009.5`: No flash of unstyled content (FOUC) SHALL occur — `suppressHydrationWarning` SHALL be set on the `<html>` element.

---

**REQ-LPT-010: SEO Meta Tags and Open Graph**
- User story: "As a developer, I want SEO meta tags and Open Graph tags auto-generated so that my page is shareable and indexable."
- Acceptance Criteria:
  - `AC-010.1`: `layout.tsx` SHALL export a `generateMetadata` function that reads from `siteConfig` to produce `title`, `description`, `keywords`, `openGraph`, and `twitter` metadata objects.
  - `AC-010.2`: The `openGraph` object SHALL include `title`, `description`, `url`, `siteName`, `images` (with `og-image.png` default), and `locale`.
  - `AC-010.3`: Each individual page SHALL be able to override metadata by exporting its own `generateMetadata`.
  - `AC-010.4`: A `robots.txt` SHALL be present at `public/robots.txt` allowing all crawlers.
  - `AC-010.5`: A `sitemap.ts` route SHALL be generated via `next/sitemap` convention using `app/sitemap.ts`.

---

**REQ-LPT-011: Static Export and ISR Compatibility**
- User story: "As a developer, I want to deploy as a static site or with ISR so that I have flexible hosting options."
- Acceptance Criteria:
  - `AC-011.1`: `next.config.ts` SHALL include a commented-out `output: 'export'` option with an inline comment explaining when to use it.
  - `AC-011.2`: All pages SHALL be compatible with `output: 'export'` — no dynamic server-only functions used in page components.
  - `AC-011.3`: A `vercel.json` SHALL be present with framework set to `nextjs` and no custom routes that would conflict with static export.

---

**REQ-LPT-012: One-File Content Configuration**
- User story: "As a developer, I want to configure all site content from a single file so that I can rebrand the template quickly."
- Acceptance Criteria:
  - `AC-012.1`: `src/lib/site-config.ts` SHALL be the single source of truth for: site name, description, URL, OG image path, nav links, hero content, feature items, pricing tiers, testimonials, CTA content, and footer columns/social links.
  - `AC-012.2`: Every section component SHALL import its default content from `siteConfig` and accept overriding props.
  - `AC-012.3`: A developer SHALL be able to fully rebrand the demo page by editing ONLY `site-config.ts` and replacing `public/og-image.png`.

---

**REQ-LPT-013: No Auth, No Supabase, No Middleware**
- User story: "As a developer cloning this template, I want zero auth/database dependencies so that I don't have to remove unwanted code before deploying."
- Acceptance Criteria:
  - `AC-013.1`: The repo SHALL contain NO `middleware.ts` file.
  - `AC-013.2`: The repo SHALL contain NO imports of `@supabase/supabase-js`, `@supabase/ssr`, or any Supabase package.
  - `AC-013.3`: The repo SHALL contain NO login, signup, or session management pages.
  - `AC-013.4`: `package.json` SHALL contain NO Supabase dependency entries.
  - `AC-013.5`: `next.config.ts` SHALL NOT reference `SUPABASE_URL` or `SUPABASE_ANON_KEY`.

---

**REQ-LPT-014: Vercel One-Click Deploy**
- User story: "As a developer, I want a Vercel deploy button in the README so that I can deploy instantly."
- Acceptance Criteria:
  - `AC-014.1`: `README.md` SHALL include a Vercel deploy badge/button using the standard Vercel deploy URL pattern.
  - `AC-014.2`: The deploy SHALL succeed with ZERO required environment variables in Phase 1.
  - `AC-014.3`: `vercel.json` SHALL specify `"framework": "nextjs"`.

---

## 2. Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Vercel Edge                      │
│  ┌─────────────────────────────────────────────┐   │
│  │            Next.js 15 App Router             │   │
│  │  ┌──────────────┐   ┌──────────────────┐   │   │
│  │  │  Root Layout │   │  Demo Page       │   │   │
│  │  │  ThemeProvider   │  (page.tsx)      │   │   │
│  │  │  Metadata    │   │                  │   │   │
│  │  └──────────────┘   └──────────────────┘   │   │
│  │                                             │   │
│  │  Section Components (React Server Components)   │
│  │  ┌───────┐ ┌─────────┐ ┌─────────┐       │   │
│  │  │ Hero  │ │Features │ │ Pricing │       │   │
│  │  └───────┘ └─────────┘ └─────────┘       │   │
│  │  ┌──────────────┐ ┌───────┐ ┌────────┐  │   │
│  │  │ Testimonials │ │  CTA  │ │ Footer │  │   │
│  │  └──────────────┘ └───────┘ └────────┘  │   │
│  │                                             │   │
│  │  Client Components (use client directive)  │   │
│  │  ┌────────────────┐ ┌──────────────────┐  │   │
│  │  │ Navbar + Sheet │ │   ThemeToggle    │  │   │
│  │  └────────────────┘ └──────────────────┘  │   │
│  │  ┌──────────────────────────────────────┐  │   │
│  │  │   PricingToggle (useState)           │  │   │
│  │  └──────────────────────────────────────┘  │   │
└─────────────────────────────────────────────────────┘

Content Flow:
siteConfig.ts ──► Section components (default props)
                  ├── Overrideable via page-level props
                  └── No external CMS / no API calls
```

### 2.2 Rendering Strategy

| Page/Route | Strategy | Reason |
|---|---|---|
| `/` (demo page) | Static (SSG) | No dynamic data; fully determined at build time |
| `app/sitemap.ts` | Static | Generated at build from `siteConfig.nav` |
| `app/not-found.tsx` | Static | Standard Next.js 404 |

**ISR Note:** If a consumer adds dynamic content (e.g., a CMS), they can add `export const revalidate = 3600` to any page component. No structural changes required.

### 2.3 Client vs Server Components

| Component | Directive | Reason |
|---|---|---|
| `layout.tsx` | Server (default) | Metadata export, ThemeProvider wrapper |
| `page.tsx` | Server (default) | Assembles sections, no interactivity |
| `sections/hero.tsx` | Server (default) | Static content only |
| `sections/features.tsx` | Server (default) | Static content only |
| `sections/pricing.tsx` | **`'use client'`** | `useState` for monthly/annual toggle |
| `sections/testimonials.tsx` | Server (default) | Static content only |
| `sections/cta.tsx` | Server (default) | Static content only |
| `sections/footer.tsx` | Server (default) | Static content only |
| `components/layout/navbar.tsx` | **`'use client'`** | Mobile menu open/close state |
| `components/layout/theme-toggle.tsx` | **`'use client'`** | `useTheme()` hook from next-themes |

**PATTERN 1 enforcement:** No `process.env.NEXT_PUBLIC_*` vars are imported in server components; no server-only env vars exist in this template at all.

---

## 3. Data Models and TypeScript Interfaces

> No database layer exists. All "data models" are TypeScript interfaces in `src/types/index.ts`.

### 3.1 Naming Conventions Table

> Since there is no database, this table covers `siteConfig` key names → TypeScript interface property names → DOM/rendered attribute names.

| Config Key (siteConfig) | TypeScript Prop Name | Rendered/DOM Use |
|---|---|---|
| `siteConfig.name` | `siteName: string` | `<title>`, `og:site_name` |
| `siteConfig.description` | `description: string` | `<meta name="description">`, `og:description` |
| `siteConfig.url` | `url: string` | `og:url`, canonical link |
| `siteConfig.ogImage` | `ogImage: string` | `og:image` src |
| `siteConfig.nav` | `nav: NavItem[]` | Navbar anchor links |
| `siteConfig.hero.badge` | `badge?: string` | Pill label above H1 |
| `siteConfig.hero.headline` | `headline: string` | `<h1>` |
| `siteConfig.hero.subheadline` | `subheadline: string` | `<p>` below H1 |
| `siteConfig.hero.primaryCta` | `primaryCta: CtaLink` | Primary button |
| `siteConfig.hero.secondaryCta` | `secondaryCta?: CtaLink` | Ghost button |
| `siteConfig.features.badge` | `badge?: string` | Section pill label |
| `siteConfig.features.headline` | `headline: string` | Section H2 |
| `siteConfig.features.items` | `items: FeatureItem[]` | Feature grid cards |
| `siteConfig.pricing.badge` | `badge?: string` | Section pill label |
| `siteConfig.pricing.headline` | `headline: string` | Section H2 |
| `siteConfig.pricing.tiers` | `tiers: PricingTier[]` | Pricing cards |
| `siteConfig.testimonials.badge` | `badge?: string` | Section pill label |
| `siteConfig.testimonials.headline` | `headline: string` | Section H2 |
| `siteConfig.testimonials.items` | `items: Testimonial[]` | Testimonial cards |
| `siteConfig.cta.headline` | `headline: string` | CTA H2 |
| `siteConfig.cta.subtext` | `subtext: string` | CTA supporting text |
| `siteConfig.cta.button` | `button: CtaLink` | CTA primary button |
| `siteConfig.cta.variant` | `variant: CtaVariant` | Background style |
| `siteConfig.footer.columns` | `columns: FooterColumn[]` | Link columns |
| `siteConfig.footer.socialLinks` | `socialLinks: SocialLink[]` | Icon links |
| `siteConfig.footer.copyright` | `copyright: string` | Footer legal line |

### 3.2 Full Interface Definitions

```typescript
// src/types/index.ts

import type { LucideIcon } from 'lucide-react';

// ─── Navigation ──────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

// ─── Hero ────────────────────────────────────────────────────
export interface HeroConfig {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

// ─── Features ────────────────────────────────────────────────
export interface FeatureItem {
  icon: LucideIcon;              // always lucide-react — never emoji
  title: string;
  description: string;
}

export interface FeaturesConfig {
  badge?: string;
  headline: string;
  subheadline?: string;
  items: FeatureItem[];
}

// ─── Pricing ─────────────────────────────────────────────────
export interface PricingTier {
  name: string;
  monthlyPrice: number;          // in USD cents — avoids float issues
  annualPrice: number;           // in USD cents, per month equivalent
  description: string;
  features: string[];
  cta: CtaLink;
  highlighted?: boolean;         // true = recommended tier
  badge?: string;                // e.g. "Most Popular"
}

export interface PricingConfig {
  badge?: string;
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
  annualDiscountLabel?: string;  // e.g. "Save 20%"
}

// ─── Testimonials ────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;            // optional — initials fallback if absent
  rating?: 1 | 2 | 3 | 4 | 5;  // optional star rating
}

export interface TestimonialsConfig {
  badge?: string;
  headline: string;
  subheadline?: string;
  items: Testimonial[];
}

// ─── CTA ─────────────────────────────────────────────────────
export type CtaVariant = 'gradient' | 'solid' | 'muted';

export interface CtaConfig {
  headline: string;
  subtext: string;
  button: CtaLink;
  secondaryButton?: CtaLink;
  variant: CtaVariant;
}

// ─── Footer ──────────────────────────────────────────────────
export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;                 // aria-label
  href: string;
  icon: LucideIcon;              // always lucide-react
}

export interface FooterConfig {
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  copyright: string;
}

// ─── Root Site Config ────────────────────────────────────────
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keywords?: string[];
  twitterHandle?: string;
  links: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
  nav: NavItem[];
  navCta?: CtaLink;
  hero: HeroConfig;
  features: FeaturesConfig;
  pricing: PricingConfig;
  testimonials: TestimonialsConfig;
  cta: CtaConfig;
  footer: FooterConfig;
}
```

---

## 4. API Routes

**Phase 1 has NO API routes.** This is an intentional design decision for a static-first template.

The following table documents what exists in Phase 1 vs. what is deferred:

| Route | Phase | Method | Description | Roles |
|---|---|---|---|---|
| *(none)* | — | — | No API routes in Phase 1 | — |
| `POST /api/contact` | Phase 2 | POST | Contact form submission (email via Resend) | Public (unauthenticated) |
| `POST /api/subscribe` | Phase 2 | POST | Email capture → Mailchimp/Resend | Public (unauthenticated) |

**Note on Phase 2 routes:** If added, they SHALL:
1. Validate request body with `zod`
2. Return `{ success: boolean; message: string }` JSON
3. Use `Response` (native Web API) not `NextResponse` for edge compatibility
4. Never import Supabase or any auth library

---

## 5. Component Structure

### 5.1 Full Component Tree

```
src/
├── app/
│   ├── layout.tsx                    → Root layout — ThemeProvider, font loading, metadata
│   ├── page.tsx                      → Demo landing page — assembles all sections
│   ├── globals.css                   → Tailwind v4 @import, @theme {}, base styles
│   ├── sitemap.ts                    → next/sitemap auto-generation from siteConfig
│   └── not-found.tsx                 → 404 page with CTA back to home
│
├── components/
│   ├── sections/
│   │   ├── hero.tsx                  → Hero section (Server Component)
│   │   ├── features.tsx              → Features grid (Server Component)
│   │   ├── pricing.tsx               → Pricing cards + toggle (Client Component)
│   │   ├── testimonials.tsx          → Testimonials grid (Server Component)
│   │   ├── cta.tsx                   → CTA banner (Server Component)
│   │   └── footer.tsx                → Site footer (Server Component)
│   │
│   ├── layout/
│   │   ├── navbar.tsx                → Sticky nav + mobile menu (Client Component)
│   │   ├── mobile-menu.tsx           → Sheet-based mobile nav (Client Component)
│   │   └── theme-toggle.tsx          → Sun/Moon toggle (Client Component)
│   │
│   ├── ui/                           → shadcn/ui generated components (do not edit)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── sheet.tsx
│   │   ├── separator.tsx
│   │   ├── toggle.tsx
│   │   └── avatar.tsx
│   │
│   └── shared/
│       ├── section-header.tsx        → Reusable badge + H2 + subheadline block
│       └── icon-wrapper.tsx          → Standardized lucide icon container with bg
│
├── lib/
│   ├── utils.ts                      → cn() helper (clsx + tailwind-merge)
│   └── site-config.ts                → SINGLE SOURCE OF TRUTH for all content
│
└── types/
    └── index.ts                      → All TypeScript interfaces (Section 3.2)
```

### 5.2 Section Component Contracts

Each section component follows this pattern:

```typescript
// Pattern for all section components
interface SectionProps {
  // All fields are optional — defaults come from siteConfig
  // This allows pages to override any field without touching siteConfig
}

export default function SectionName(props: SectionProps) {
  // merge props over siteConfig defaults
  const config = { ...siteConfig.sectionName, ...props };
  return ( /* JSX */ );
}
```

### 5.3 SectionHeader Shared Component

```typescript
// src/components/shared/section-header.tsx
// Usage: <SectionHeader badge="Features" headline="..." subheadline="..." align="center" />
interface SectionHeaderProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center';    // default: 'center'
  className?: string;
}
```

### 5.4 Navbar Behavior Spec

```
Desktop (≥ 1024px):
  [Logo/Brand]  [Nav Link] [Nav Link] [Nav Link]  [ThemeToggle] [CTA Button]

Mobile (< 1024px):
  [Logo/Brand]                               [ThemeToggle] [☰ Menu Icon]
  └── Sheet (slide from right):
        [Nav Link]
        [Nav Link]
        [Nav Link]
        [CTA Button]
```

The `Sheet` component from shadcn/ui SHALL be used for the mobile drawer (not a custom implementation).

---

## 6. Styling Architecture

### 6.1 Tailwind v4 Configuration (PATTERN 17)

> **CRITICAL:** Tailwind v4 uses `@theme {}` blocks in CSS — NOT `tailwind.config.js`. Do NOT create a `tailwind.config.js` or `tailwind.config.ts`. Do NOT use `:root {}` for design tokens.

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  /* Brand color palette */
  --color-brand-50: oklch(97% 0.02 264);
  --color-brand-100: oklch(94% 0.05 264);
  --color-brand-200: oklch(87% 0.10 264);
  --color-brand-300: oklch(78% 0.16 264);
  --color-brand-400: oklch(68% 0.20 264);
  --color-brand-500: oklch(58% 0.22 264);   /* primary */
  --color-brand-600: oklch(50% 0.22 264);
  --color-brand-700: oklch(42% 0.20 264);
  --color-brand-800: oklch(34% 0.16 264);
  --color-brand-900: oklch(26% 0.12 264);

  /* Typography */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* Spacing / Layout */
  --spacing-section: 5rem;       /* vertical padding for sections */
  --radius-card: 0.75rem;
}
```

### 6.2 Dark Mode Strategy

- `next-themes` with `attribute="class"` injects `class="dark"` on `<html>`.
- Tailwind v4 dark mode is triggered by the `.dark` class selector.
- All dark mode variants use Tailwind's `dark:` prefix.
- No manual CSS variables for dark mode are needed — Tailwind handles it.

### 6.3 Font Loading

- **Inter** font loaded via `next/font/google` in `layout.tsx` — zero CLS.
- Applied as a CSS variable `--font-inter` and referenced in `@theme {}`.

```typescript
// src/app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
```

---

## 7. SEO Implementation

### 7.1 Metadata Architecture

```typescript
// src/app/layout.tsx — root metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### 7.2 Sitemap

```typescript
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
```

### 7.3 robots.txt

```
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

> **Note:** The Sitemap URL in `public/robots.txt` uses a placeholder. The `app/sitemap.ts` route is the canonical machine-readable sitemap; consumers should update the `robots.txt` with their actual domain or remove the static file and rely solely on Next.js's `sitemap.ts` auto-discovery.

---

## 8. Migration SQL

> **NOT APPLICABLE.** This template has no database layer. There are no Supabase tables, no auth triggers, no RLS policies, and no migrations.
>
> **Future consumers:** If you add a database layer to a project built on this template, follow these rules:
> - Prefix all tables with your project slug (e.g., `lp_submissions`, `lp_waitlist`)
> - NEVER modify `auth.*` triggers — they are shared across all projects on the Supabase instance
> - Use `upsert()` on tables that have auth triggers (PATTERN 2)
> - Auth triggers MUST have `SECURITY DEFINER` + `SET search_path = public` (PATTERN 11)
>
> **Phase 2 example table** (if email capture is added):
> ```sql
> -- lp_waitlist: stores email capture submissions
> -- NOTE: no auth trigger — plain insert is safe here
> CREATE TABLE IF NOT EXISTS lp_waitlist (
>   id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
>   email       TEXT NOT NULL,
>   source      TEXT,                          -- e.g. 'hero', 'cta'
>   created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
> );
>
> CREATE UNIQUE INDEX idx_lp_waitlist_email ON lp_waitlist (email);
>
> ALTER TABLE lp_waitlist ENABLE ROW LEVEL SECURITY;
> -- RLS policies: owned by BUILD agent per standard pattern
> ```

---

## 9. Implementation Plan

### 9.1 File Structure

```
/tmp/factory-builds/landing-template-v2/
├── .gitignore                                  → Standard Next.js gitignore
├── .github/
│   └── workflows/
│       └── ci.yml                              → Lint + type-check on push
├── package.json                                → Dependencies (see 9.3 table)
├── tsconfig.json                               → Strict TypeScript, path aliases
├── postcss.config.mjs                          → @tailwindcss/postcss plugin only
├── next.config.ts                              → Next.js 15 config, commented output:'export'
├── vercel.json                                 → framework: nextjs, no custom routes
├── components.json                             → shadcn/ui config (style: default, tw v4)
├── public/
│   ├── favicon.ico                             → Default favicon (replace per project)
│   ├── og-image.png                            → 1200×630 OG image placeholder
│   └── robots.txt                              → Allow all crawlers
├── src/
│   ├── app/
│   │   ├── layout.tsx                          → Root layout, ThemeProvider, Inter font, metadata
│   │   ├── page.tsx                            → Demo page assembling all 6 sections
│   │   ├── globals.css                         → @import "tailwindcss", @theme {} tokens
│   │   ├── sitemap.ts                          → Auto-generated sitemap from siteConfig
│   │   └── not-found.tsx                       → 404 with home CTA
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero.tsx                        → Badge + H1 + subheadline + dual CTA + image
│   │   │   ├── features.tsx                    → 3-col icon grid, configurable items
│   │   │   ├── pricing.tsx                     → 3-tier cards + monthly/annual toggle [use client]
│   │   │   ├── testimonials.tsx                → 3-col quote cards with avatar fallback
│   │   │   ├── cta.tsx                         → Full-width banner, 3 variant backgrounds
│   │   │   └── footer.tsx                      → Logo + columns + social icons + copyright
│   │   ├── layout/
│   │   │   ├── navbar.tsx                      → Sticky nav + desktop links + CTA [use client]
│   │   │   ├── mobile-menu.tsx                 → Sheet-based mobile nav [use client]
│   │   │   └── theme-toggle.tsx                → Sun/Moon icon toggle [use client]
│   │   ├── shared/
│   │   │   ├── section-header.tsx              → Badge + H2 + subheadline block (reused by all sections)
│   │   │   └── icon-wrapper.tsx                → Rounded container for lucide icons in feature cards
│   │   └── ui/                                 → shadcn/ui components (CLI-generated, do not hand-edit)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── sheet.tsx
│   │       ├── separator.tsx
│   │       ├── toggle.tsx
│   │       └── avatar.tsx
│   ├── lib/
│   │   ├── utils.ts                            → cn() = clsx + twMerge
│   │   └── site-config.ts                      → All content + SiteConfig default export
│   └── types/
│       └── index.ts                            → All TypeScript interfaces (Section 3.2)
└── README.md                                   → Setup guide, Vercel deploy button, customization guide
```

### 9.2 Key Technical Decisions

1. **Next.js 15 App Router** — Latest stable release; React Server Components reduce client bundle by keeping static sections server-rendered. ISR available without config changes.
2. **Tailwind CSS v4 with `@theme {}`** — PATTERN 17: config lives in `globals.css`, no `tailwind.config.js`. Uses `@import "tailwindcss"` syntax. PostCSS plugin: `@tailwindcss/postcss`.
3. **shadcn/ui (CLI-installed)** — Components are copied into the project, not a package dependency. Owned and customizable. CLI command: `npx shadcn@latest init`.
4. **next-themes** — Handles SSR-safe dark/light mode with `localStorage` persistence. Zero FOUC via `suppressHydrationWarning` on `<html>`.
5. **lucide-react for all icons** — PATTERN 13: zero emoji icons. Every icon reference is a named import from `lucide-react`.
6. **Prices stored as integer cents** — `monthlyPrice: number` in cents (e.g., `2900` = $29.00) avoids floating point rendering bugs in pricing display.
7. **`src/lib/site-config.ts` as single content source** — Reduces time-to-rebrand to under 5 minutes for a developer who only edits one file.
8. **`'use client'` only where necessary** — Pricing (toggle state) and Navbar (menu open state) and ThemeToggle. All other components are Server Components.
9. **TypeScript strict mode** — `"strict": true` in `tsconfig.json`. Catches prop shape mismatches at build time.
10. **Path alias `@/`** — `tsconfig.json` maps `@/*` to `./src/*`. All internal imports use `@/` — never relative `../../`.
11. **Static export opt-in** — `output: 'export'` is commented out in `next.config.ts` with an explanatory comment. Default mode supports ISR.
12. **No `middleware.ts`** — Explicitly absent. No auth redirects, no session checks, no route guards of any kind.

### 9.3 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | `^15.3.0` | Framework — App Router, RSC, ISR |
| `react` | `^19.0.0` | UI library |
| `react-dom` | `^19.0.0` | DOM rendering |
| `typescript` | `^5.8.0` | Type safety |
| `tailwindcss` | `^4.1.0` | Utility-first CSS |
| `@tailwindcss/postcss` | `^4.1.0` | PostCSS integration for Tailwind v4 |
| `postcss` | `^8.5.0` | CSS transformation pipeline |
| `lucide-react` | `^0.507.0` | Icon library (PATTERN 13) |
| `next-themes` | `^0.4.6` | Dark/light mode with SSR support |
| `class-variance-authority` | `^0.7.1` | Component variant management |
| `clsx` | `^2.1.1` | Conditional class merging |
| `tailwind-merge` | `^3.2.0` | Tailwind class conflict resolution |
| `@radix-ui/react-slot` | `^1.2.0` | shadcn/ui `asChild` prop |
| `@radix-ui/react-sheet` | `^1.x` | Mobile menu Sheet primitive |
| `@radix-ui/react-avatar` | `^1.x` | Testimonial avatar primitive |
| `@radix-ui/react-toggle` | `^1.x` | Pricing toggle primitive |
| `@radix-ui/react-separator` | `^1.x` | Dividers |

**Dev Dependencies:**

| Package | Version | Purpose |
|---|---|---|
| `@types/node` | `^22.x` | Node.js type definitions |
| `@types/react` | `^19.x` | React type definitions |
| `@types/react-dom` | `^19.x` | React DOM type definitions |
| `eslint` | `^9.x` | Linting |
| `eslint-config-next` | `^15.x` | Next.js ESLint config |
| `@typescript-eslint/eslint-plugin` | `^8.x` | TypeScript ESLint rules |

> **Note:** shadcn/ui is NOT a package dependency — it is installed via CLI and components live in `src/components/ui/`. Do NOT add `shadcn-ui` to `package.json`.

### 9.4 Shell Commands

```bash
# ─── 1. Scaffold the project ─────────────────────────────────────────────────
cd /tmp/factory-builds/landing-template-v2
npx create-next-app@15 . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git \
  --yes

# ─── 2. Install runtime dependencies ────────────────────────────────────────
npm install next-themes lucide-react clsx tailwind-merge class-variance-authority

# ─── 3. Install Radix UI primitives (shadcn/ui deps) ────────────────────────
npm install @radix-ui/react-slot @radix-ui/react-avatar @radix-ui/react-separator

# ─── 4. Initialize shadcn/ui (Tailwind v4 mode) ────────────────────────────
npx shadcn@latest init --defaults
# When prompted:
#   Style: Default
#   Base color: Slate
#   CSS variables: yes
# This creates components.json and src/components/ui/

# ─── 5. Add required shadcn/ui components ────────────────────────────────────
npx shadcn@latest add button card badge sheet separator toggle avatar

# ─── 6. Create directory structure ───────────────────────────────────────────
mkdir -p src/components/sections
mkdir -p src/components/layout
mkdir -p src/components/shared
mkdir -p src/types
mkdir -p .github/workflows

# ─── 7. Verify Tailwind v4 postcss config ────────────────────────────────────
# postcss.config.mjs should contain ONLY:
# export default { plugins: { '@tailwindcss/postcss': {} } }
# If it still has 'autoprefixer', remove it — Tailwind v4 includes it

# ─── 8. Type-check ───────────────────────────────────────────────────────────
npx tsc --noEmit

# ─── 9. Dev server sanity check ──────────────────────────────────────────────
npm run dev
# Expected: http://localhost:3000 shows demo landing page with all 6 sections

# ─── 10. Build and verify ────────────────────────────────────────────────────
npm run build
# Expected: ✓ Compiled successfully, no type errors, no lint errors
```

---

## 10. Prerequisites

| Dependency | Status | Notes |
|---|---|---|
| Node.js ≥ 20.x | ✅ Ready | Required by Next.js 15 |
| npm ≥ 10.x | ✅ Ready | Bundled with Node 20 |
| Next.js 15.x | ✅ Ready | Available via `create-next-app@15` |
| Tailwind CSS v4 | ✅ Ready | Available via npm `tailwindcss@^4` |
| shadcn/ui (Tailwind v4 support) | ✅ Ready | `shadcn@latest` supports Tailwind v4 as of 2025 |
| next-themes ^0.4.x | ✅ Ready | Latest stable, supports Next.js 15 + React 19 |
| lucide-react | ✅ Ready | No special setup required |
| Vercel account | ⚠️ Needs setup | Required for Vercel deploy button to work; not required to run locally |
| GitHub repo: `ah-template-nextjs-landing-vercel` | ⚠️ Needs setup | Repo must be created before the deploy button URL is finalized |
| Custom domain | ⚠️ Needs setup | Optional for Phase 1; `siteConfig.url` defaults to Vercel preview URL |
| `NEXT_PUBLIC_SITE_URL` env var | ⚠️ Needs setup | Optional — used to override `siteConfig.url` at deploy time; template works without it |
| OG image (`public/og-image.png`) | ⚠️ Needs setup | Placeholder ships with template; consumer must replace with branded 1200×630 PNG |

**No ❌ Blocked items.** BUILD can start immediately.

---

## 11. Phase Scope

### Phase 1 — BUILD NOW (Zero External Blockers)

The following features form a complete, immediately deployable product:

- [x] Project scaffold with Next.js 15, Tailwind v4, shadcn/ui
- [x] `src/lib/site-config.ts` — single file content configuration
- [x] `src/types/index.ts` — full TypeScript interface definitions
- [x] **Hero section** — badge, H1, subheadline, dual CTA, optional image
- [x] **Features section** — configurable icon grid (3-col desktop)
- [x] **Pricing section** — 3 tiers, monthly/annual toggle, highlighted tier
- [x] **Testimonials section** — quote cards, avatar with initials fallback
- [x] **CTA section** — 3 background variants (gradient, solid, muted)
- [x] **Footer section** — columns, social icons, copyright
- [x] **Navbar** — sticky, backdrop blur, mobile Sheet menu
- [x] **ThemeToggle** — dark/light with localStorage persistence, no FOUC
- [x] **SEO** — `generateMetadata`, OpenGraph, Twitter Card, sitemap.ts, robots.txt
- [x] `vercel.json` — framework: nextjs
- [x] `README.md` — Vercel deploy button, setup guide, customization guide
- [x] `public/og-image.png` — 1200×630 placeholder
- [x] CI workflow — lint + type-check on push

**Phase 1 result:** A fully functional, visually polished landing page template that a developer can clone, update `site-config.ts`, and deploy to Vercel with zero environment variables required.

### Phase 2 — DEFERRED (Requires External Setup)

These features are explicitly out of scope for the initial template build. They are documented here so consumers know where to extend.

| Feature | Blocker | Notes |
|---|---|---|
| Contact form (`POST /api/contact`) | Resend API key required | Add `resend` package; POST to `/api/contact`; validate with `zod` |
| Email capture / waitlist | Resend or Mailchimp API key | Needs `lp_waitlist` table if storing in Supabase; see Migration SQL §8 |
| CMS integration (Contentlayer, Sanity, Notion) | CMS account + API token | Sections already accept props — drop in CMS data at the page level |
| Analytics (Vercel Analytics, PostHog) | Account setup | Add `@vercel/analytics` or `posthog-js`; wrap in `Suspense` |
| Blog/Articles section | Content source TBD | Add `app/blog/[slug]/page.tsx`; use MDX or CMS |
| A/B testing | Third-party service | Use Vercel Edge Config or PostHog flags |
| i18n / localization | Translation strings | `next-intl` or Next.js built-in i18n config |
| Playwright E2E tests | CI environment with browser | Add `@playwright/test`; test each section renders |

---

## 12. Configuration Files (Critical Contents)

### 12.1 `next.config.ts`

```typescript
// /tmp/factory-builds/landing-template-v2/next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ── Static Export (opt-in) ───────────────────────────────────────────────
  // Uncomment to build a fully static site for CDN / S3 / GitHub Pages hosting.
  // When enabled: remove any ISR (revalidate exports) and server-only features.
  // output: 'export',

  // ── Images ───────────────────────────────────────────────────────────────
  images: {
    // Add external image domains here if using remote avatars/images.
    // Example: remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
    unoptimized: false,
  },

  // ── TypeScript ───────────────────────────────────────────────────────────
  typescript: {
    ignoreBuildErrors: false,   // always fix TS errors — never skip
  },

  // ── ESLint ────────────────────────────────────────────────────────────────
  eslint: {
    ignoreDuringBuilds: false,  // always fix lint errors — never skip
  },
};

export default nextConfig;
```

### 12.2 `vercel.json`

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

### 12.3 `components.json` (shadcn/ui)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### 12.4 `tsconfig.json` (key settings)

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 12.5 `postcss.config.mjs`

```javascript
// /tmp/factory-builds/landing-template-v2/postcss.config.mjs
// Tailwind v4 — uses @tailwindcss/postcss ONLY. No autoprefixer needed.
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

> ⚠️ `create-next-app` may inject `autoprefixer` here. **Remove it.** Tailwind v4 handles vendor prefixing internally.

---

## 13. Anti-Pattern Checklist for BUILD Agent

The following are common mistakes from 282 production incidents. BUILD agent MUST verify these before submitting:

| # | Check | What to verify |
|---|---|---|
| P1 | No server env in client | No `process.env.*` in any `'use client'` component |
| P6 | Env vars set before deploy | Document ALL required env vars in README. Phase 1 = ZERO required. |
| P13 | No emoji icons | Search codebase: `grep -r "emoji\|🚀\|✅\|🎯" src/` → should return nothing |
| P17 | Tailwind v4 @theme | Verify `globals.css` uses `@theme {}` NOT `:root {}`. Verify no `tailwind.config.js` exists. |
| — | No Supabase refs | `grep -r "supabase\|createClient\|SUPABASE" src/ package.json` → must return nothing |
| — | No middleware | `ls src/middleware.ts` → must not exist |
| — | No auth pages | `ls src/app/login src/app/signup src/app/auth` → must not exist |
| — | TypeScript passes | `npx tsc --noEmit` → zero errors |
| — | Build passes | `npm run build` → zero errors, zero warnings |
| — | Icons are lucide | All icon usage is `import { X } from 'lucide-react'` — never inline SVG strings |
| — | Prices are integers | `PricingTier.monthlyPrice` and `annualPrice` are integers (cents), not floats |
| — | Mobile menu uses Sheet | Navbar mobile menu uses `<Sheet>` from shadcn/ui — not a custom `div` implementation |
| — | FOUC prevented | `<html>` element has `suppressHydrationWarning` attribute in `layout.tsx` |
| — | Path alias consistent | All internal imports use `@/` — no `../../` relative paths in `src/` |

---

## 14. README.md Outline

The `README.md` SHALL contain the following sections in order:

1. **Project name + one-line description**
2. **Vercel Deploy Button** — `[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ascendantventures/ah-template-nextjs-landing-vercel)`
3. **Tech Stack** — table: Next.js 15, React 19, Tailwind v4, shadcn/ui, next-themes, lucide-react
4. **Features** — bulleted list of all sections
5. **Quick Start** — clone → `npm install` → `npm run dev`
6. **Customization Guide** — step-by-step: "Edit `src/lib/site-config.ts`, replace `public/og-image.png`, push to Vercel"
7. **Section Reference** — one-line description of each section component and its props
8. **Adding a Database** — pointer to Supabase template: `ah-template-nextjs-supabase-vercel`
9. **Adding a Contact Form** — pointer to Phase 2 (Resend integration steps)
10. **License** — MIT

---

*End of Specification*
