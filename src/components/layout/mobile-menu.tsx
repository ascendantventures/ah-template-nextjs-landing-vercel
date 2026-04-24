'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import type { NavItem, CtaLink } from '@/types';

interface MobileMenuProps {
  siteName: string;
  nav: NavItem[];
  navCta?: CtaLink;
}

export function MobileMenu({ siteName, nav, navCta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open menu"
        className="h-9 w-9 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </Button>

      <SheetContent side="right" className="flex flex-col">
        <SheetHeader className="text-left">
          <SheetTitle className="text-lg font-semibold">{siteName}</SheetTitle>
        </SheetHeader>

        <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {nav.map((item) => (
            <SheetClose key={item.href} asChild>
              <Link
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-center rounded-md px-3 py-2.5 text-base font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        {navCta && (
          <div className="mt-auto pt-6">
            <SheetClose asChild>
              <Button asChild className="w-full" size="lg">
                <Link
                  href={navCta.href}
                  target={navCta.external ? '_blank' : undefined}
                  rel={navCta.external ? 'noopener noreferrer' : undefined}
                >
                  {navCta.label}
                </Link>
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
