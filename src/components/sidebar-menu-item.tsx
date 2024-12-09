import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { GlowCircle } from './glow-circle';

type SidebarMenuItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
};

export function SidebarMenuItem({
  label,
  icon: Icon,
  href,
  isActive,
}: SidebarMenuItemProps) {
  return (
    <Link
      className={cn(
        'relative flex items-center gap-3 overflow-clip rounded-xl border border-transparent px-3 py-2.5 text-muted-foreground transition-all duration-300 hover:border hover:border-secondary-foreground/20 hover:bg-secondary-foreground/20 hover:text-secondary-foreground',
        isActive &&
          'border-secondary-foreground/20 bg-secondary-foreground/10 text-secondary-foreground',
      )}
      href={href}
    >
      <Icon className="z-[1] h-5 w-5" />
      <span className="z-[1] font-medium">{label}</span>

      {isActive && (
        <GlowCircle
          size={500}
          top="-450px"
          left="-30px"
          color="#3b82f6"
          opacity={0.5}
          blur="blur-xl"
        />
      )}
    </Link>
  );
}

SidebarMenuItem.displayName = 'SidebarMenuItem';
