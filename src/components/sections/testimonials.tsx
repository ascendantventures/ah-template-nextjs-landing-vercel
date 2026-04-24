import { Star, User } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SectionHeader } from '@/components/shared/section-header';
import { siteConfig } from '@/lib/site-config';
import type { TestimonialsConfig } from '@/types';

type TestimonialsProps = Partial<TestimonialsConfig>;

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function Testimonials(props: TestimonialsProps) {
  const config: TestimonialsConfig = { ...siteConfig.testimonials, ...props };

  return (
    <section
      id="testimonials"
      className="bg-[var(--color-background)] py-24 sm:py-32"
      aria-label="Testimonials section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          badge={config.badge}
          headline={config.headline}
          subheadline={config.subheadline}
          className="mb-16"
        />

        {/* Testimonials grid: 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.items.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="flex flex-col border-[var(--color-border)] bg-[var(--color-card)] transition-shadow hover:shadow-md dark:hover:shadow-none"
            >
              <CardHeader className="pb-4">
                {/* Star rating */}
                {testimonial.rating && (
                  <div
                    className="flex gap-0.5 mb-3"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                    role="img"
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[var(--color-foreground)] text-[var(--color-foreground)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}

                {/* Quote */}
                <blockquote>
                  <p className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
              </CardHeader>

              <CardContent className="mt-auto pt-0">
                {/* Author info */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 shrink-0">
                    {testimonial.avatarUrl ? (
                      <AvatarImage
                        src={testimonial.avatarUrl}
                        alt={`${testimonial.author} avatar`}
                      />
                    ) : null}
                    <AvatarFallback className="bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] text-xs font-medium">
                      {testimonial.avatarUrl ? (
                        <User className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        getInitials(testimonial.author)
                      )}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[var(--color-foreground)]">
                      {testimonial.author}
                    </p>
                    <p className="truncate text-xs text-[var(--color-muted-foreground)]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
