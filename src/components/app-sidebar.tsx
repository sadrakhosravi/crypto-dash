import * as React from "react";
import Link from "next/link";

// Components
import Logo from "./logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border flex justify-center">
        <Logo width={32} height={32} fill="white" />
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <span className="text-xs p-2">
          Developed by{" "}
          <Link
            className="underline text-blue-300"
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
