// Components
import { AppSidebar } from '@/components/app-sidebar';
import { BalanceSummaryCard } from '@/components/balance-summary-card';
import { CoinSummaryCard } from '@/components/coin-summary-card';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';

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
            <main className="flex h-[calc(100%-4rem)] flex-col gap-4">
              <div className="flex h-1/2 items-stretch gap-6 p-6">
                <div className="flex h-full w-full items-center">
                  <BalanceSummaryCard />
                </div>

                <div className="flex w-8/12 shrink-0 items-center gap-3">
                  <div className="h-full w-1/3">
                    <CoinSummaryCard />
                  </div>
                  <div className="h-full w-1/3">
                    <CoinSummaryCard />
                  </div>
                  <div className="h-full w-1/3">
                    <CoinSummaryCard />
                  </div>
                </div>
              </div>
              <div>
                <Separator className="my-0" />
              </div>
              <div className="h-1/2">Test</div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
