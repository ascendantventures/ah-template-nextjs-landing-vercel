import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/site-config';
import type { HeroConfig } from '@/types';

type HeroProps = Partial<HeroConfig>;

export function Hero(props: HeroProps) {
  const config: HeroConfig = { ...siteConfig.hero, ...props };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 sm:py-32 lg:py-40"
      aria-label="Hero section"
    >
      {/* Decorative gradient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 h-[600px] w-[600px] rounded-full bg-[var(--color-brand-500)] opacity-[0.04] blur-[120px]" />
        <div className="absolute left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--color-brand-300)] opacity-[0.04] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Badge */}
          {config.badge && (
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium tracking-wide"
            >
              {config.badge}
            </Badge>
          )}

          {/* Headline */}
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl leading-[1.1]">
            {config.headline}
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted-foreground)] sm:text-xl">
            {config.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="min-w-[160px] h-11 px-6 text-base">
              <Link
                href={config.primaryCta.href}
                target={config.primaryCta.external ? '_blank' : undefined}
                rel={config.primaryCta.external ? 'noopener noreferrer' : undefined}
              >
                {config.primaryCta.label}
              </Link>
            </Button>

            {config.secondaryCta && (
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="min-w-[160px] h-11 px-6 text-base gap-2"
              >
                <Link
                  href={config.secondaryCta.href}
                  target={config.secondaryCta.external ? '_blank' : undefined}
                  rel={config.secondaryCta.external ? 'noopener noreferrer' : undefined}
                >
                  {config.secondaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
