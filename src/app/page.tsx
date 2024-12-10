import { BalanceSummaryCard } from '@/components/dashboard/balance-summary-card';
import { CoinSummaryCard } from '@/components/dashboard/coin-summary-card';
import { CoinSwap } from '@/components/dashboard/coin-swap';
import { MarketList } from '@/components/dashboard/market-list';
import { Section } from '@/components/section';
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { dashboardData } from '@/data/dashboard-data';
import { PieChart, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      {/* Top Section */}
      <div className="flex flex-col items-stretch gap-4 p-6 pb-3 pt-2 md:pt-6 lg:h-1/2 lg:flex-row">
        {/* Left Section */}
        <Section
          className="w-full lg:w-1/3"
          sectionTitleComponent={
            <SectionTitle
              title="Account Summary"
              subtitle="Your Assets"
              icon={PieChart}
            />
          }
        >
          <BalanceSummaryCard />
        </Section>

        {/* Right Section */}
        <div className="flex h-full w-full shrink-0 flex-col gap-2 lg:w-2/3">
          <Section
            sectionTitleComponent={
              <SectionTitle
                title="Top Coins"
                subtitle="Trending"
                icon={TrendingUp}
              />
            }
          >
            <div className="flex h-full flex-wrap items-stretch gap-2 lg:flex-nowrap">
              {dashboardData.summaryCardCoins.map((coin) => (
                <div key={coin.name} className="w-full lg:flex-1">
                  <CoinSummaryCard
                    coinId={coin.name.toLowerCase()}
                    name={coin.name}
                    symbol={coin.symbol}
                    color={coin.color}
                  />
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 h-auto flex-shrink-0 p-6 pt-3 md:mt-0 lg:h-1/2">
        <Card className="h-full">
          <CardContent className="flex h-full flex-col items-stretch gap-3 pt-6 lg:flex-row">
            <Section
              className="w-full lg:w-2/3"
              sectionTitleComponent={<SectionTitle title="Trending" />}
            >
              <MarketList />
            </Section>
            <Section
              className="w-full lg:w-1/3"
              sectionTitleComponent={<SectionTitle title="Coin Swap" />}
            >
              <CoinSwap />
            </Section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
