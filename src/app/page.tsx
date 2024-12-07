// Components
import { AppSidebar } from "@/components/app-sidebar";
import { CoinSummaryCard } from "@/components/coin-summary-card";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <main className="p-4">
              <div className="flex">
                <div className="w-4/12">Test</div>

                <div className="flex w-8/12 items-center gap-3">
                  <div className="w-1/3">
                    <CoinSummaryCard />
                  </div>
                  <div className="w-1/3">
                    <CoinSummaryCard />
                  </div>
                  <div className="w-1/3">
                    <CoinSummaryCard />
                  </div>
                </div>
              </div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
