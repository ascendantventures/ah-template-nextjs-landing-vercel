'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full',
        'border-b border-[var(--color-border)]',
        'bg-[var(--color-background)]/95 backdrop-blur-sm',
        'supports-[backdrop-filter]:bg-[var(--color-background)]/80',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg text-[var(--color-foreground)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded-sm"
          aria-label={`${siteConfig.name} home`}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: theme toggle + CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {siteConfig.navCta && (
            <Button asChild size="sm" className="hidden lg:inline-flex">
              <Link
                href={siteConfig.navCta.href}
                target={siteConfig.navCta.external ? '_blank' : undefined}
                rel={siteConfig.navCta.external ? 'noopener noreferrer' : undefined}
              >
                {siteConfig.navCta.label}
              </Link>
            </Button>
          )}

          <MobileMenu
            siteName={siteConfig.name}
            nav={siteConfig.nav}
            navCta={siteConfig.navCta}
          />
        </div>
      </div>
    </header>
  );
}
