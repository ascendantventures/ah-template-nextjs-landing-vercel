import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  Layers,
  Headphones,
  Code2,
  MessageSquare,
  Link2,
} from 'lucide-react';
import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'LaunchKit',
  description:
    'The fastest way to ship production-ready landing pages. Built with Next.js 15, Tailwind CSS v4, and shadcn/ui.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://launchkit.example.com',
  ogImage: '/og-image.png',
  keywords: [
    'Next.js',
    'landing page',
    'template',
    'Tailwind CSS',
    'shadcn/ui',
    'React',
  ],
  twitterHandle: '@launchkit',
  links: {
    github: 'https://github.com/ascendantventures/ah-template-nextjs-landing-vercel',
    twitter: 'https://twitter.com/launchkit',
    linkedin: 'https://linkedin.com/company/launchkit',
  },

  // ─── Navigation ─────────────────────────────────────────────────────────────
  nav: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  navCta: {
    label: 'Get Started',
    href: '#pricing',
  },

  // ─── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    badge: 'Now with Next.js 15',
    headline: 'Ship landing pages in minutes, not days',
    subheadline:
      'LaunchKit is a production-ready Next.js template with pre-built sections, dark mode, SEO optimization, and Vercel one-click deploy. Clone, configure, ship.',
    primaryCta: {
      label: 'Get Started Free',
      href: '#pricing',
    },
    secondaryCta: {
      label: 'View on GitHub',
      href: 'https://github.com/ascendantventures/ah-template-nextjs-landing-vercel',
      external: true,
    },
  },

  // ─── Features ───────────────────────────────────────────────────────────────
  features: {
    badge: 'Features',
    headline: 'Everything you need to ship fast',
    subheadline:
      'Six pre-built sections, a one-file config, and zero external dependencies to get started.',
    items: [
      {
        icon: Zap,
        title: 'Blazing Fast by Default',
        description:
          'Built on Next.js 15 App Router with React Server Components. Static generation by default, ISR when you need freshness. 100 Lighthouse scores out of the box.',
      },
      {
        icon: Layers,
        title: 'Pre-built Section Library',
        description:
          'Hero, Features, Pricing, Testimonials, CTA, and Footer — all production-ready. Every section accepts typed props so you can override any field without touching the internals.',
      },
      {
        icon: Shield,
        title: 'Zero Auth, Zero Complexity',
        description:
          'No Supabase, no middleware guards, no auth wiring. This template ships clean so you can add exactly what you need and nothing you don\'t.',
      },
      {
        icon: Globe,
        title: 'SEO Out of the Box',
        description:
          'Automatic Open Graph tags, Twitter Cards, sitemap.ts, and robots.txt. Configure once in site-config.ts and every page gets production-grade metadata.',
      },
      {
        icon: BarChart3,
        title: 'Dark / Light Mode',
        description:
          'next-themes handles SSR-safe dark mode with localStorage persistence. Respects the OS preference on first visit. Zero flash of unstyled content.',
      },
      {
        icon: Headphones,
        title: 'One-File Configuration',
        description:
          'Edit site-config.ts to rebrand completely — name, colors, copy, links, pricing tiers, and testimonials. Replace og-image.png and you\'re done.',
      },
    ],
  },

  // ─── Pricing ────────────────────────────────────────────────────────────────
  pricing: {
    badge: 'Pricing',
    headline: 'Simple, transparent pricing',
    subheadline: 'Start free. Scale when you need to. No hidden fees.',
    annualDiscountLabel: 'Save 20%',
    tiers: [
      {
        name: 'Starter',
        monthlyPrice: 0,
        annualPrice: 0,
        description: 'Perfect for personal projects and prototypes.',
        features: [
          'All 6 section components',
          'Dark / light mode',
          'SEO meta tags',
          'Vercel deploy button',
          'MIT License',
        ],
        cta: {
          label: 'Get Started Free',
          href: 'https://github.com/ascendantventures/ah-template-nextjs-landing-vercel',
          external: true,
        },
      },
      {
        name: 'Pro',
        monthlyPrice: 2900,
        annualPrice: 2320,
        description: 'For teams who ship fast and need premium support.',
        badge: 'Most Popular',
        highlighted: true,
        features: [
          'Everything in Starter',
          'Priority email support',
          'Extended section library',
          'Analytics integration guide',
          'Contact form (Resend)',
          'Custom domain setup guide',
        ],
        cta: {
          label: 'Start Pro Trial',
          href: '#contact',
        },
      },
      {
        name: 'Enterprise',
        monthlyPrice: 9900,
        annualPrice: 7920,
        description: 'For agencies and larger teams with custom needs.',
        features: [
          'Everything in Pro',
          'Dedicated Slack channel',
          'Custom section development',
          'White-label license',
          'SLA guarantee',
          'Onboarding call',
        ],
        cta: {
          label: 'Contact Sales',
          href: '#contact',
        },
      },
    ],
  },

  // ─── Testimonials ────────────────────────────────────────────────────────────
  testimonials: {
    badge: 'Testimonials',
    headline: 'Loved by developers everywhere',
    subheadline:
      'Thousands of engineers and designers have used LaunchKit to ship landing pages faster.',
    items: [
      {
        quote:
          "I went from zero to a production landing page in under 30 minutes. The one-file config is genius — I just edited site-config.ts and it looked like ours instantly.",
        author: 'Alex Chen',
        role: 'Founder',
        company: 'BuildFast',
        rating: 5,
      },
      {
        quote:
          'The dark mode implementation is flawless. No flash, no jank, just works. I\'ve tried four other templates and none of them got this right.',
        author: 'Sarah Kowalski',
        role: 'Senior Frontend Engineer',
        company: 'DesignLab',
        rating: 5,
      },
      {
        quote:
          "Our team uses this as the starting point for every client landing page. The pricing toggle alone saves us an hour per project. TypeScript throughout is a huge plus.",
        author: 'Marcus Johnson',
        role: 'CTO',
        company: 'AgencyStack',
        rating: 5,
      },
      {
        quote:
          'Finally a template with actual SEO setup — not just a placeholder. The sitemap.ts and metadata auto-generation saved me a full day of setup.',
        author: 'Priya Nair',
        role: 'Growth Engineer',
        company: 'Launchpad',
        rating: 5,
      },
      {
        quote:
          "The shadcn/ui components are already wired up and customizable without fighting the library. This is what every Next.js template should look like.",
        author: 'Tom Bergström',
        role: 'Indie Developer',
        company: 'Self-employed',
        rating: 5,
      },
      {
        quote:
          "No Supabase, no auth, no junk I didn't ask for. It's rare to find a template that respects your time by not bundling in 10 things you'll spend hours removing.",
        author: 'Leila Amir',
        role: 'Product Engineer',
        company: 'Velocity Labs',
        rating: 5,
      },
    ],
  },

  // ─── CTA ─────────────────────────────────────────────────────────────────────
  cta: {
    headline: 'Ready to ship your landing page today?',
    subtext:
      'Clone the template, edit one file, deploy to Vercel. No environment variables required.',
    button: {
      label: 'Clone the Template',
      href: 'https://github.com/ascendantventures/ah-template-nextjs-landing-vercel',
      external: true,
    },
    secondaryButton: {
      label: 'View Live Demo',
      href: '#',
    },
    variant: 'solid',
  },

  // ─── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Changelog', href: '#' },
          { label: 'Roadmap', href: '#' },
        ],
      },
      {
        title: 'Templates',
        links: [
          { label: 'Landing Page', href: '#' },
          {
            label: 'SaaS + Auth',
            href: 'https://github.com/ascendantventures/ah-template-nextjs-supabase-vercel',
            external: true,
          },
          { label: 'Blog', href: '#' },
          { label: 'Portfolio', href: '#' },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            label: 'Documentation',
            href: '#',
          },
          { label: 'GitHub', href: 'https://github.com/ascendantventures', external: true },
          { label: 'Discussions', href: '#' },
          { label: 'License', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Blog', href: '#' },
          {
            label: 'Twitter',
            href: 'https://twitter.com/launchkit',
            external: true,
          },
          { label: 'Privacy Policy', href: '#' },
        ],
      },
    ],
    socialLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/ascendantventures/ah-template-nextjs-landing-vercel',
        icon: Code2,
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/launchkit',
        icon: MessageSquare,
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/launchkit',
        icon: Link2,
      },
    ],
    copyright: `© ${new Date().getFullYear()} LaunchKit. Built with Next.js 15 + shadcn/ui. MIT License.`,
  },
};
