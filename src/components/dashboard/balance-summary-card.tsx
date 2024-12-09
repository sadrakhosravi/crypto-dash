'use client';

import * as React from 'react';
import { cn, USDollar } from '@/lib/utils';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Area, AreaChart, YAxis } from 'recharts';
import { DotPattern } from '../ui/dotpattern';
import { Card, CardContent, CardHeader } from '../ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  CustomTooltip,
} from '../ui/chart';
import { useCoinPrice } from '@/hooks/api/use-coin-price';
import { dashboardData } from '@/data/dashboard-data';
import { movingAverage } from '@/utils/moving-average';
import { Skeleton } from '../ui/skeleton';
import BlurFade from '../ui/blur-fade';

const chartConfig = {
  summary: {
    label: 'Account',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function BalanceSummaryCard() {
  const { data: btcData, isPending: isPendingBTC } = useCoinPrice(
    dashboardData.summaryCardCoins[0].name.toLowerCase(),
  );
  const { data: ethData, isPending: isPendingEth } = useCoinPrice(
    dashboardData.summaryCardCoins[1].name.toLowerCase(),
  );
  const { data: dogeData, isPending: isPendingDoge } = useCoinPrice(
    dashboardData.summaryCardCoins[2].name.toLowerCase(),
  );

  const isPending = isPendingBTC || isPendingEth || isPendingDoge;

  const total =
    ((btcData?.market_data.current_price.usd || 0) +
      (ethData?.market_data.current_price.usd || 0) +
      (dogeData?.market_data.current_price.usd || 0)) *
    0.3;

  const totalChange =
    (btcData?.market_data.price_change_24h_in_currency.usd || 0) +
    (ethData?.market_data.price_change_24h_in_currency.usd || 0) +
    (dogeData?.market_data.price_change_24h_in_currency.usd || 0);

  const avgPriceBTC = movingAverage(
    btcData?.market_data.sparkline_7d.price || [],
    24,
  );
  const avgPriceEth = movingAverage(
    ethData?.market_data.sparkline_7d.price || [],
    24,
  );
  const avgPriceDoge = movingAverage(
    dogeData?.market_data.sparkline_7d.price || [],
    24,
  );

  const totalAvgPrice = avgPriceBTC.map(
    (price, index) => (price + avgPriceEth[index] + avgPriceDoge[index]) * 0.3,
  );
  const minValue = Math.min(...totalAvgPrice);
  const maxValue = Math.max(...totalAvgPrice);

  const chartData = totalAvgPrice.map((price, index) => ({
    time: index === 0 ? 'Today' : `${index}d ago`,
    price: totalAvgPrice[index],
  }));

  const percentageChange = (totalChange / total) * 100;
  const isTrendPositive = totalChange >= 0;

  return (
    <Card className="relative flex h-full w-full flex-1 flex-col overflow-hidden px-0 pb-0">
      <CardHeader className="flex-shrink-0 flex-row items-center justify-start gap-4 pb-3 pt-6">
        {isPending ? (
          <Skeleton className="h-10 w-2/3 rounded-md" />
        ) : (
          <BlurFade delay={0.2} inView className="m-1 mt-2">
            <h3 className="text-3xl font-medium">{USDollar.format(total)}</h3>
          </BlurFade>
        )}
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4 px-0 pb-0">
        {/* Top Section */}
        {isPending ? (
          <div className="flex-shrink-0 px-6">
            {/* Top Section Skeleton */}
            <div className="flex items-center gap-2">
              {/* Trend Icon Skeleton */}
              <Skeleton className="h-6 w-6 rounded-full" />
              {/* Change Value Skeleton */}
              <Skeleton className="h-5 w-16" />
              {/* Percentage Skeleton */}
              <Skeleton className="h-5 w-12" />
            </div>
            {/* Description Text Skeleton */}
            <div className="mt-2">
              <Skeleton className="h-4 w-64" />
              <Skeleton className="mt-1 h-4 w-40" />
            </div>
          </div>
        ) : (
          <BlurFade delay={0.35} inView className="m-1 mt-2">
            <div className="flex-shrink-0 px-6">
              <div className="flex items-center gap-2">
                {isTrendPositive ? (
                  <div className="w-max rounded-full bg-blue-500 p-1">
                    <ArrowUpRight className="h-3 w-3 text-white" />
                  </div>
                ) : (
                  <div className="w-max rounded-full bg-red-500 p-1">
                    <ArrowDownRight className="h-3 w-3 text-white" />
                  </div>
                )}
                <h4
                  className={cn(
                    'font-normal',
                    isTrendPositive ? 'text-blue-500' : 'text-red-500',
                  )}
                >
                  ${totalChange.toFixed(2)}
                </h4>
                <span>{percentageChange.toFixed(2)} %</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {percentageChange.toFixed(2)}%{' '}
                {isTrendPositive ? 'more' : 'less'} than last week at this
                period
              </div>
            </div>
          </BlurFade>
        )}

        {/* Chart Section */}
        <div className="flex flex-grow flex-col items-center justify-end overflow-hidden">
          <ChartContainer config={chartConfig} className="h-[120px] w-full">
            <AreaChart
              accessibilityLayer
              data={chartData}
              className="h-full w-full"
              margin={{
                left: -1,
                right: -1,
              }}
            >
              <YAxis
                width={0}
                domain={[minValue * 0.97, maxValue * 1.03]} // Add padding to min and max values
                tickFormatter={(value) => `$${value}`} // Format Y-axis values (e.g., add "$")
              />
              <ChartTooltip cursor={false} content={<CustomTooltip />} />
              <Area
                dataKey="price"
                type="natural"
                fill="var(--color-summary)"
                fillOpacity={0.3}
                stroke="var(--color-summary)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>

      {/* Decorative Background */}
      <div className="absolute left-1/2 top-[-300px] z-0 block h-[300px] w-full -translate-x-1/2 rotate-180 rounded-full bg-blue-600 opacity-50 blur-3xl" />
      <div className="absolute left-1/2 top-[-100px] z-0 block h-[100px] w-[50px] -translate-x-1/2 rotate-180 rounded-full bg-white opacity-30 blur-3xl" />
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn('opacity-[0.15]')}
      />
    </Card>
  );
}

BalanceSummaryCard.displayName = 'BalanceSummaryCard';
