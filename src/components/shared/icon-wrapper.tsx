import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  size?: number;
}

export function IconWrapper({
  icon: Icon,
  className,
  iconClassName,
  size = 20,
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-lg',
        'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]',
        className,
      )}
    >
      <Icon
        size={size}
        className={cn('shrink-0', iconClassName)}
        aria-hidden="true"
      />
    </div>
  );
}
