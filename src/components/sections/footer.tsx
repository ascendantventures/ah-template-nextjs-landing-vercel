import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/lib/site-config';
import type { FooterConfig } from '@/types';

type FooterProps = Partial<FooterConfig>;

export function Footer(props: FooterProps) {
  const config: FooterConfig = { ...siteConfig.footer, ...props };

  return (
    <footer
      className="bg-[var(--color-background)] border-t border-[var(--color-border)]"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top row: brand + columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-lg font-semibold text-[var(--color-foreground)] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded-sm"
              aria-label={`${siteConfig.name} home`}
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-[var(--color-muted-foreground)] max-w-xs">
              {siteConfig.description}
            </p>

            {/* Social links */}
            {config.socialLinks.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {config.socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] hover:bg-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {config.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-4">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3" role="list">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        {/* Bottom row: copyright */}
        <p className="text-center text-sm text-[var(--color-muted-foreground)]">
          {config.copyright}
        </p>
      </div>
    </footer>
  );
}
