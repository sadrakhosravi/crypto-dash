import React from 'react';
import { cn } from '@/lib/utils';

type GlowCircleProps = {
  size: number; // Diameter of the circle
  top: string; // Top position (e.g., "-200px")
  left?: string; // Left position (default is "50%")
  color: string; // Background color of the circle (e.g., "yellow-600")
  opacity: number; // Opacity percentage (e.g., 50)
  blur: string; // Blur intensity (e.g., "blur-3xl")
  className?: string; // Additional classes for customization
};

export const GlowCircle: React.FC<GlowCircleProps> = ({
  size,
  top,
  left = '50%',
  color,
  opacity,
  blur,
  className,
}) => {
  return (
    <div
      className={cn(
        'absolute',
        'rounded-full',
        `${blur}`,
        '-translate-x-1/2',
        'rotate-180',
        className,
      )}
      style={{
        top: top,
        left: left,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        opacity: opacity,
        zIndex: 0,
      }}
    />
  );
};

GlowCircle.displayName = 'GlowCircle';
