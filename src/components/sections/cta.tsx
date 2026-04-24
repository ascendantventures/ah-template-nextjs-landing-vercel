import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import type { CtaConfig, CtaVariant } from '@/types';

type CtaProps = Partial<CtaConfig>;

function getVariantClasses(variant: CtaVariant): string {
  switch (variant) {
    case 'gradient':
      return 'bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-700)] text-white';
    case 'solid':
      return 'bg-[var(--color-foreground)] text-[var(--color-background)]';
    case 'muted':
      return 'bg-[var(--color-muted)] text-[var(--color-foreground)]';
    default:
      return 'bg-[var(--color-foreground)] text-[var(--color-background)]';
  }
}

function getButtonVariant(variant: CtaVariant) {
  switch (variant) {
    case 'gradient':
    case 'solid':
      return 'secondary' as const;
    case 'muted':
      return 'default' as const;
    default:
      return 'secondary' as const;
  }
}

export function Cta(props: CtaProps) {
  const config: CtaConfig = { ...siteConfig.cta, ...props };
  const variantClass = getVariantClasses(config.variant);
  const buttonVariant = getButtonVariant(config.variant);

  return (
    <section
      id="cta"
      className={cn('py-24 sm:py-32', variantClass)}
      aria-label="Call to action section"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl leading-tight">
            {config.headline}
          </h2>

          <p className="max-w-xl text-lg leading-relaxed opacity-80">
            {config.subtext}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              variant={buttonVariant}
              size="lg"
              className="min-w-[180px] h-11 px-6 text-base"
            >
              <Link
                href={config.button.href}
                target={config.button.external ? '_blank' : undefined}
                rel={config.button.external ? 'noopener noreferrer' : undefined}
              >
                {config.button.label}
              </Link>
            </Button>

            {config.secondaryButton && (
              <Button
                asChild
                variant="ghost"
                size="lg"
                className={cn(
                  'min-w-[180px] h-11 px-6 text-base gap-2',
                  (config.variant === 'solid' || config.variant === 'gradient') &&
                    'text-inherit hover:bg-white/10',
                )}
              >
                <Link
                  href={config.secondaryButton.href}
                  target={config.secondaryButton.external ? '_blank' : undefined}
                  rel={
                    config.secondaryButton.external
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {config.secondaryButton.label}
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
