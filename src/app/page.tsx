import { BalanceSummaryCard } from '@/components/dashboard/balance-summary-card';
import { CoinSummaryCard } from '@/components/dashboard/coin-summary-card';
import { CoinSwap } from '@/components/dashboard/coin-swap';
import { MarketList } from '@/components/dashboard/market-list';
import { Section } from '@/components/section';
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { PieChart, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <div className="min-h-1/2 flex h-1/2 flex-1 items-stretch gap-4 p-6 pb-3">
        {/* Left Section */}
        <Section
          className="w-1/3"
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
        <div className="flex h-full w-2/3 shrink-0 flex-col gap-2">
          <Section
            sectionTitleComponent={
              <SectionTitle
                title="Top Coins"
                subtitle="Trending"
                icon={TrendingUp}
              />
            }
          >
            <div className="flex h-full flex-row items-stretch gap-2">
              <div className="h-full flex-1">
                <CoinSummaryCard />
              </div>
              <div className="h-full flex-1">
                <CoinSummaryCard />
              </div>
              <div className="h-full flex-1">
                <CoinSummaryCard />
              </div>
            </div>
          </Section>
        </div>
      </div>

      <div className="h-1/2 flex-shrink-0 p-6 pt-3">
        <Card className="h-full">
          <CardContent className="flex h-full items-stretch gap-3 pt-6">
            <Section
              className="w-2/3"
              sectionTitleComponent={<SectionTitle title="Market" />}
            >
              <MarketList />
            </Section>
            <Section
              className="w-1/3"
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
