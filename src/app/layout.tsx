import { Onest } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@/components/ui/tooltip';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Header } from '@/components/header';
import type { Metadata } from 'next';
import ReactQueryProvider from './ReactQueryProvider';
import { Toaster } from 'sonner';
import ErrorBoundary from '@/components/error-boundary';

// Font
const onest = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto Dashboard',
  description: 'A dashboard to track your crypto investments',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${onest.className} min-w-screen min-h-screen text-sm antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactQueryProvider>
              <TooltipProvider delayDuration={0}>
                <SidebarProvider>
                  <AppSidebar />
                  <SidebarInset>
                    <Header />

                    <main className="h-[calc(100%-4rem)] min-h-[calc(100%-4rem)] w-full">
                      {children}
                    </main>
                    <Toaster />
                  </SidebarInset>
                </SidebarProvider>
              </TooltipProvider>
            </ReactQueryProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
