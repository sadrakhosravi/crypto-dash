import { useId } from 'react';

import { cn } from '@/lib/utils';

interface DotPatternProps {
  width?: unknown;
  height?: unknown;
  x?: unknown;
  y?: unknown;
  cx?: unknown;
  cy?: unknown;
  cr?: unknown;
  className?: string;
  [key: string]: unknown;
}
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80',
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width as number}
          height={height as number}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x as number}
          y={y as number}
        >
          <circle
            id="pattern-circle"
            cx={cx as number}
            cy={cy as number}
            r={cr as number}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
