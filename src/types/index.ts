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
  icon: LucideIcon; // always lucide-react — never emoji
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
  monthlyPrice: number; // in USD cents — avoids float issues
  annualPrice: number; // in USD cents, per month equivalent
  description: string;
  features: string[];
  cta: CtaLink;
  highlighted?: boolean; // true = recommended tier
  badge?: string; // e.g. "Most Popular"
}

export interface PricingConfig {
  badge?: string;
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
  annualDiscountLabel?: string; // e.g. "Save 20%"
}

// ─── Testimonials ────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string; // optional — initials fallback if absent
  rating?: 1 | 2 | 3 | 4 | 5; // optional star rating
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
  label: string; // aria-label
  href: string;
  icon: LucideIcon; // always lucide-react
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
