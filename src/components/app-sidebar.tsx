'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Logo } from './logo';
import { SidebarMenuItem } from './sidebar-menu-item';
import { routes } from '@/routes/routes';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props} className="bg-sidebar-primary">
      <SidebarHeader className="flex h-16 justify-center border-b border-sidebar-border">
        <Logo width={24} height={24} fill="white" />
      </SidebarHeader>
      <SidebarContent className="px-2 py-1.5 lg:px-4 lg:py-2">
        {routes.map((route) => (
          <SidebarMenuItem
            key={route.path}
            label={route.name}
            icon={route.icon}
            href={route.path}
            isActive={pathname === route.path}
          />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <span className="p-2 text-xs">
          Developed by{' '}
          <Link
            className="text-blue-300 underline"
            target="_blank"
            href="https://sadrakhosravi.com"
          >
            Sadra Khosravi{' '}
          </Link>
        </span>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

AppSidebar.displayName = 'AppSidebar';
