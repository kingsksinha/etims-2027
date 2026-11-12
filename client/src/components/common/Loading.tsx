import { Loader2 } from 'lucide-react';

interface LoadingProps {
  message?: string;
  className?: string;
}

export default function Loading({
  message = 'Loading…',
  className = '',
}: LoadingProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 py-20 ${className}`}
    >
      <Loader2 className="h-8 w-8 animate-spin text-accent" />
      <p className="text-text-muted text-sm">{message}</p>
    </div>
  );
}
