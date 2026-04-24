import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SectionHeaderProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badge,
  headline,
  subheadline,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {badge && (
        <Badge
          variant="secondary"
          className="px-3 py-1 text-xs font-medium tracking-wide uppercase"
        >
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          'text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl',
          'leading-tight',
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            'max-w-2xl text-lg text-[var(--color-muted-foreground)]',
            align === 'center' && 'mx-auto',
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
