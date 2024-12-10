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
import { CoinInfo } from '../coin-info';
import { useCoinPrice } from '@/hooks/api/use-coin-price';
import { movingAverage } from '@/utils/moving-average';
import { Skeleton } from '../ui/skeleton';
import BlurFade from '../ui/blur-fade';

const chartConfig = {
  chart: {
    label: 'Bitcoin Price',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

type CoinSummaryCardProps = {
  coinId: string;
  name: string;
  symbol: string;
  color: string;
};

export function CoinSummaryCard({
  coinId,
  name,
  symbol,
  color,
}: CoinSummaryCardProps) {
  const { data, isPending } = useCoinPrice(coinId);

  // Calculate the moving average of the last 7 days
  const avgPrice = movingAverage(
    data?.market_data.sparkline_7d.price || [],
    24,
  );

  // Find the min and max values for the Y-axis
  const minValue = Math.min(...avgPrice);
  const maxValue = Math.max(...avgPrice);

  // Prepare the chart data using avgPrice
  const chartData = avgPrice.map((price, index) => ({
    time: index === 0 ? 'Today' : `${index}d ago`,
    price,
  }));

  const isTrendPositive =
    (data?.market_data.price_change_24h_in_currency.usd || 0) >= 0;

  return (
    <Card className="relative flex h-full w-full flex-col overflow-hidden px-0 pb-0">
      {/* Header */}
      <CardHeader className="shrink-0 flex-row items-center justify-center gap-4 pt-6">
        {isPending ? (
          <div className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-12 rounded-sm" />
              <Skeleton className="h-4 w-20 rounded-sm" />
            </div>
          </div>
        ) : (
          <BlurFade delay={0.25} inView>
            <CoinInfo
              img={data?.image.large || ''}
              name={name}
              symbol={symbol}
              swapText
            />
          </BlurFade>
        )}
      </CardHeader>

      {/* Content */}
      <CardContent className="flex h-full flex-col justify-between gap-4 px-0 pb-0 pt-2">
        {/* Top Section */}
        <div className="px-6">
          {isPending ? (
            <div className="flex items-center gap-2">
              <div className="w-1/2">
                {/* Price Skeleton */}
                <Skeleton className="mb-1 h-5 w-24" />
                {/* Symbol Skeleton */}
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex w-1/2 items-center justify-end gap-2">
                {/* Trend Icon Skeleton */}
                <Skeleton className="h-6 w-6 rounded-full" />
                {/* Percentage Change Skeleton */}
                <Skeleton className="h-5 w-16" />
              </div>
            </div>
          ) : (
            <BlurFade delay={0.25} inView>
              <div className="flex items-center gap-2">
                <div className="w-1/2">
                  <h3 className="text-lg font-medium">
                    {USDollar.format(data?.market_data.current_price.usd || 0)}
                  </h3>
                  <span className="text-muted-foreground">1.00 {symbol}</span>
                </div>
                <div className="flex w-1/2 items-center justify-end gap-2">
                  {isTrendPositive ? (
                    <div className="w-max rounded-full bg-blue-500 p-1">
                      <ArrowUpRight className="h-3 w-3 text-white" />
                    </div>
                  ) : (
                    <div className="w-max rounded-full bg-red-500 p-1">
                      <ArrowDownRight className="h-3 w-3 text-white" />
                    </div>
                  )}

                  <span
                    className={cn(
                      'font-normal',
                      isTrendPositive ? 'text-blue-500' : 'text-red-500',
                    )}
                  >
                    {data?.market_data.price_change_24h_in_currency.usd.toFixed(
                      2,
                    ) || 0}
                    %
                  </span>
                </div>
              </div>
            </BlurFade>
          )}
        </div>

        {/* Chart Section */}
        <div className="flex h-[20px] flex-grow items-end justify-center overflow-hidden md:h-auto">
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
                dataKey="price" // Use the 'price' field for the chart
                type="natural"
                fill={color}
                fillOpacity={0.3}
                stroke={color}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>

      {/* Background Decorations */}
      <div
        className="absolute left-1/2 top-[-200px] z-0 block h-[300px] w-[100px] -translate-x-1/2 rotate-180 rounded-full bg-yellow-600 opacity-50 blur-3xl"
        style={{
          backgroundColor: color,
        }}
      />
      <div className="absolute left-1/2 top-[-80px] z-0 block h-[100px] w-[100px] -translate-x-1/2 rotate-180 rounded-full bg-white opacity-30 blur-3xl" />
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          'h-[200px] opacity-40 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]',
        )}
      />
    </Card>
  );
}

CoinSummaryCard.displayName = 'CoinSummaryCard';
