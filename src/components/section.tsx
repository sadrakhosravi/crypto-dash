import { cn } from '@/lib/utils';
import * as React from 'react';

type SectionProps = {
  className?: string;
  sectionTitleComponent: React.ReactNode;
  children: React.ReactNode;
};

export const Section = ({
  sectionTitleComponent,
  children,
  className,
}: SectionProps) => {
  return (
    <div
      className={cn('flex h-full flex-col gap-2 overflow-hidden', className)}
    >
      <div className="flex-shrink-0">{sectionTitleComponent}</div>
      <div className="h-full flex-grow overflow-hidden">{children}</div>
    </div>
  );
};
