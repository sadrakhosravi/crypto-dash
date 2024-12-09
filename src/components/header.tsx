import * as React from 'react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from './ui/breadcrumb';
import { SidebarTrigger } from './ui/sidebar';
import { Separator } from './ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { ModeToggle } from './mode-toggle';
import { ApiResponseStatus } from './api-response-status';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center border-b bg-background px-4">
      <div className="flex w-2/3 items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger className="-ml-1" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle sidebar</p>
          </TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex w-1/3 items-center justify-end gap-2">
        <ApiResponseStatus />
        <ModeToggle />
      </div>
    </header>
  );
}

Header.displayName = 'Header';
