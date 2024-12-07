import * as React from "react";
import Link from "next/link";

// Utils
import { cn } from "@/lib/utils";

// Types
import type { LucideIcon } from "lucide-react";

type SidebarMenuItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
};

export const SidebarMenuItem = ({
  label,
  icon: Icon,
  href,
  isActive,
}: SidebarMenuItemProps) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-muted-foreground hover:border hover:border-secondary-foreground/20 hover:bg-secondary-foreground/10 hover:text-secondary-foreground",
        isActive && "bg-white/20",
      )}
      href={href}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

SidebarMenuItem.displayName = "SidebarMenuItem";
