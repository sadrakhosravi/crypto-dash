'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Bitcoin } from 'lucide-react';
import { Area, AreaChart } from 'recharts';
import { DotPattern } from '../ui/dotpattern';
import { Card, CardContent, CardHeader } from '../ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';
import { CoinInfo } from '../coin-info';

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function CoinSummaryCard() {
  return (
    <Card className="relative flex h-full flex-col overflow-clip px-0 pb-0">
      <CardHeader className="shrink-0 flex-row items-center justify-center gap-4 pt-6">
        <CoinInfo icon={Bitcoin} name="Bitcoin" symbol="BTC" swapText />
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between px-0 pb-0 pt-2">
        <div className="px-6">
          <div className="flex items-center gap-2">
            <div className="w-1/2">
              <h3 className="text-2xl font-medium">$60,000</h3>
              <span className="text-muted-foreground">1.00 BTC</span>
            </div>

            <div className="flex w-1/2 items-center justify-end gap-2">
              <div className="w-max rounded-full bg-blue-500 p-1.5">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>
              <span>+1.67%</span>
            </div>
          </div>
        </div>

        <div className="w-full shrink-0 pt-4">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: -1,
                right: -1,
              }}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.3}
                stroke="var(--color-desktop)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>

      <div className="absolute left-1/2 top-[-200px] z-0 block h-[300px] w-[100px] -translate-x-1/2 rotate-180 rounded-full bg-yellow-600 opacity-50 blur-3xl" />
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
