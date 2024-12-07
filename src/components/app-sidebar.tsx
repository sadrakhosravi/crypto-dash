import * as React from "react";
import Link from "next/link";

// Icons
import { LayoutGrid } from "lucide-react";

// Components
import { Logo } from "./logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarMenuItem } from "./sidebar-menu-item";

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex h-16 justify-center border-b border-sidebar-border">
        <Logo width={32} height={32} fill="white" />
      </SidebarHeader>
      <SidebarContent className="lg:px-4 lg:py-2">
        <SidebarMenuItem label="Dashboard" icon={LayoutGrid} href="/" />
      </SidebarContent>
      <SidebarFooter>
        <span className="p-2 text-xs">
          Developed by{" "}
          <Link
            className="text-blue-300 underline"
            target="_blank"
            href="https://sadrakhosravi.com"
          >
            Sadra Khosravi{" "}
          </Link>
        </span>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

AppSidebar.displayName = "AppSidebar";
