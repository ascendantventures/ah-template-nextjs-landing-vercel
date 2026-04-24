'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/shared/section-header';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import type { PricingConfig } from '@/types';

type PricingProps = Partial<PricingConfig>;

function formatPrice(cents: number): string {
  if (cents === 0) return 'Free';
  return `$${Math.floor(cents / 100)}`;
}

export function Pricing(props: PricingProps) {
  const config: PricingConfig = { ...siteConfig.pricing, ...props };
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="bg-[var(--color-muted)] py-24 sm:py-32"
      aria-label="Pricing section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          badge={config.badge}
          headline={config.headline}
          subheadline={config.subheadline}
          className="mb-10"
        />

        {/* Monthly / Annual toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={cn(
              'text-sm font-medium transition-colors',
              !annual
                ? 'text-[var(--color-foreground)]'
                : 'text-[var(--color-muted-foreground)]',
            )}
          >
            Monthly
          </span>

          <button
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual(!annual)}
            className={cn(
              'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent',
              'transition-colors duration-200 ease-in-out',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2',
              annual
                ? 'bg-[var(--color-primary)]'
                : 'bg-[var(--color-border)]',
            )}
            aria-label="Toggle annual billing"
          >
            <span
              className={cn(
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                annual ? 'translate-x-5' : 'translate-x-0',
              )}
            />
          </button>

          <span
            className={cn(
              'text-sm font-medium transition-colors',
              annual
                ? 'text-[var(--color-foreground)]'
                : 'text-[var(--color-muted-foreground)]',
            )}
          >
            Annual
            {config.annualDiscountLabel && (
              <Badge
                variant="secondary"
                className="ml-2 text-xs font-medium"
              >
                {config.annualDiscountLabel}
              </Badge>
            )}
          </span>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {config.tiers.map((tier) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            const isHighlighted = tier.highlighted;

            return (
              <div
                key={tier.name}
                className={cn(
                  'relative flex flex-col rounded-xl border p-8 transition-shadow',
                  isHighlighted
                    ? [
                        'border-[var(--color-foreground)] bg-[var(--color-card)]',
                        'shadow-[0_0_0_2px_var(--color-foreground)]',
                        'dark:shadow-[0_0_0_2px_var(--color-foreground)]',
                      ]
                    : 'border-[var(--color-border)] bg-[var(--color-card)] hover:shadow-md',
                )}
              >
                {/* Highlight badge */}
                {tier.badge && (
                  <Badge
                    variant="default"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs"
                  >
                    {tier.badge}
                  </Badge>
                )}

                {/* Tier name + description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                    {tier.description}
                  </p>
                </div>

                {/* Price display */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-[var(--color-foreground)]">
                      {formatPrice(price)}
                    </span>
                    {price > 0 && (
                      <span className="mb-1 text-sm text-[var(--color-muted-foreground)]">
                        / mo{annual ? ' (billed annually)' : ''}
                      </span>
                    )}
                  </div>
                </div>

                {/* Feature list */}
                <ul className="mb-8 flex flex-col gap-3" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-foreground)]"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[var(--color-muted-foreground)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <div className="mt-auto">
                  <Button
                    asChild
                    variant={isHighlighted ? 'default' : 'outline'}
                    className="w-full"
                    size="lg"
                  >
                    <Link
                      href={tier.cta.href}
                      target={tier.cta.external ? '_blank' : undefined}
                      rel={tier.cta.external ? 'noopener noreferrer' : undefined}
                    >
                      {tier.cta.label}
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
