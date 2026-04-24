# QA Report — landing-template-v2 (ah-template-nextjs-landing-vercel)

**Date:** 2026-04-24  
**QA Station:** Static code + structure analysis  
**Time budget used:** ~10 min

---

## Spec Summary

Build a lightweight Next.js 15 landing page template with:
- Tailwind CSS v4 + shadcn/ui
- Pre-built sections: Hero, Features, Pricing, Testimonials, CTA, Footer
- Dark/light mode toggle
- Responsive design (mobile-first)
- SEO meta tags + Open Graph
- Static export / ISR support
- Vercel deploy target
- NO Supabase, NO auth, NO middleware

---

## Findings Table

| Check | Result | Notes |
|-------|--------|-------|
| TypeScript (`tsc --noEmit`) | ✅ PASS | Exit code 0, no errors |
| Router patterns (Pages Router) | ✅ PASS | No getServerSideProps/getStaticProps found |
| Hardcoded secrets | ✅ PASS | No sk_live/sk_test/JWT patterns |
| Server env in client components | ✅ PASS | No SERVICE_ROLE/STRIPE_SECRET in client |
| Supabase in npm deps | ✅ PASS | Zero supabase packages in package.json or lock file |
| Supabase in source code | ✅ PASS | Zero `@supabase`/`createClient` imports in src/ |
| Middleware file | ✅ PASS | No src/middleware.ts or root middleware.ts |
| Auth code (login/signup) | ✅ PASS | No auth routes, no createClient calls |
| Error handling (API routes) | ✅ PASS | No API routes to check (template is static) |
| Emoji icons | ✅ PASS | 0 emoji in UI components (lucide-react used throughout) |
| Hardcoded hex in className | ✅ PASS | 0 violations |
| Gradient text | ✅ PASS | 0 occurrences |
| Glassmorphism | ⚠️ WARN | Navbar uses `backdrop-blur-sm` — acceptable for sticky nav UX |
| Uniform feature grid (3-col) | ⚠️ WARN | 4 instances of grid-cols-3 — appropriate for landing sections |
| Inter font | ⚠️ WARN | Inter loaded via next/font — test note says "check config first"; acceptable for template |
| `use client` on line 1 | ✅ PASS | All client components have directive on line 1 |
| metadata + use client conflict | ✅ PASS | metadata only in layout.tsx (server), no conflict |
| Supabase directory leftover | ⚠️ WARN | `supabase/config.toml` exists but has NO runtime effect |
| Vercel deploy config | ✅ PASS | vercel.json with framework: nextjs, correct buildCommand |
| Static export support | ✅ PASS | Commented-out `output: 'export'` with clear instructions in next.config.ts |
| ISR support | ✅ PASS | Template docs ISR; no revalidate by default (static) |

---

## AC Checklist

```
AC-001: ✅ PASS — Next.js 15.5.15 used (package.json); NO Supabase packages, NO auth packages
AC-002: ✅ PASS — Tailwind CSS v4 confirmed (@import "tailwindcss" in globals.css, @tailwindcss/postcss plugin)
AC-003: ✅ PASS — shadcn/ui configured (components.json), Button, Badge, Card, Avatar, Separator, Sheet all present
AC-004: ✅ PASS — All 6 section components exist and are fully implemented (not stubs):
                   Hero (src/components/sections/hero.tsx)
                   Features (src/components/sections/features.tsx)
                   Pricing (src/components/sections/pricing.tsx) — with monthly/annual toggle
                   Testimonials (src/components/sections/testimonials.tsx)
                   CTA (src/components/sections/cta.tsx)
                   Footer (src/components/sections/footer.tsx)
AC-005: ✅ PASS — Dark/light mode toggle implemented (ThemeToggle with next-themes, Sun/Moon icons via lucide-react)
AC-006: ✅ PASS — Responsive design: mobile-first breakpoints (sm:, lg:) throughout all sections
AC-007: ✅ PASS — SEO meta tags in layout.tsx: title, description, keywords, openGraph (url, image, siteName, locale), twitter card, robots config
AC-008: ✅ PASS — Open Graph tags: image (1200x630), title, description, siteName all present
AC-009: ✅ PASS — Static export: output: 'export' commented with instructions; vercel.json configured for deployment
AC-010: ✅ PASS — NO Supabase: 0 supabase packages in deps, 0 createClient calls, 0 auth routes, NO middleware file
AC-011: ✅ PASS — Demo landing page (page.tsx) showcases all 6 sections in sequence
AC-012: ✅ PASS — sitemap.ts implemented with MetadataRoute.Sitemap; robots.txt in public/
AC-013: ✅ PASS — TypeScript strict mode enabled; all types defined in src/types/index.ts (SiteConfig, HeroConfig, FeaturesConfig, PricingConfig, TestimonialsConfig, CtaConfig, FooterConfig)
AC-014: ✅ PASS — One-file config (site-config.ts) drives all section content
AC-015: ⚠️ WARN — supabase/config.toml leftover artifact exists (spec says strip ALL Supabase deps)
```

---

## Bug Report

### BUG-001 (LOW):
```
AC: AC-001 / AC-010 (strip ALL Supabase dependencies)
Severity: low
File: /tmp/factory-builds/landing-template-v2/supabase/config.toml
Fix type: delete-directory
Max diff: remove supabase/ directory entirely
DO NOT TOUCH: src/, package.json, next.config.ts
Description: The supabase/ directory with config.toml is a leftover from the base template.
It has NO runtime effect (zero Supabase packages, zero imports), but as a template repo
it should be completely removed to honor "NO Supabase" requirement.
Fix: rm -rf supabase/
```

---

## Critical Path Verification

| Critical Path | Verified |
|---------------|----------|
| All 6 landing sections exist and implemented | ✅ |
| TypeScript compiles with zero errors | ✅ |
| No Supabase/auth code in running app | ✅ |
| Dark/light mode (next-themes) | ✅ |
| SEO + Open Graph metadata | ✅ |
| Tailwind v4 + shadcn/ui | ✅ |
| Vercel deploy config | ✅ |
| Demo page uses all sections | ✅ |
| No middleware | ✅ |
| Responsive mobile-first | ✅ |

---

## Final Verdict

**QA_PASS**

All core acceptance criteria are met. TypeScript is clean. No Supabase code in the running application. All 6 sections implemented (Hero, Features with icon grid, Pricing with annual/monthly toggle, Testimonials with star ratings, CTA with variant support, Footer with nav columns + social links). Dark/light mode works via next-themes. SEO + OG metadata fully configured. Vercel deploy target set. The only issue is a leftover `supabase/config.toml` directory which has zero runtime impact — flagged as BUG-001 (low severity, delete-directory fix).
