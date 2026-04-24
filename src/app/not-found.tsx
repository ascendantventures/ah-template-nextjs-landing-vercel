import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 px-4 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-semibold tracking-tight text-[var(--color-foreground)]">
          404
        </h1>
        <h2 className="text-2xl font-medium text-[var(--color-foreground)]">
          Page not found
        </h2>
        <p className="max-w-md text-[var(--color-muted-foreground)]">
          The page you were looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <Button asChild size="lg">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
