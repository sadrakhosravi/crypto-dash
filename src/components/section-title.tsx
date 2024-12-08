import { LucideIcon } from 'lucide-react';
import * as React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
};

export const SectionTitle = ({
  title,
  subtitle,
  icon: Icon,
}: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-0.5">
      {subtitle && (
        <div className="flex items-center gap-2 text-secondary-foreground/50">
          {Icon && <Icon className="h-4 w-4" />}
          <span>{subtitle}</span>
        </div>
      )}
      <h2 className="text-xl font-medium">{title}</h2>
    </div>
  );
};

SectionTitle.displayName = 'SectionTitle';
