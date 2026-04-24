import { SectionHeader } from '@/components/shared/section-header';
import { IconWrapper } from '@/components/shared/icon-wrapper';
import { siteConfig } from '@/lib/site-config';
import type { FeaturesConfig } from '@/types';

type FeaturesProps = Partial<FeaturesConfig>;

export function Features(props: FeaturesProps) {
  const config: FeaturesConfig = { ...siteConfig.features, ...props };

  return (
    <section
      id="features"
      className="bg-[var(--color-background)] py-24 sm:py-32"
      aria-label="Features section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          badge={config.badge}
          headline={config.headline}
          subheadline={config.subheadline}
          className="mb-16"
        />

        {/* Feature grid: 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {config.items.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-shadow hover:shadow-md dark:hover:shadow-none dark:hover:border-[var(--color-muted-foreground)]/20"
            >
              <IconWrapper
                icon={feature.icon}
                className="bg-[var(--color-secondary)] text-[var(--color-foreground)]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[var(--color-foreground)]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
