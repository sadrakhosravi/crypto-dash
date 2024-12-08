'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Area, AreaChart } from 'recharts';
import { DotPattern } from '../ui/dotpattern';
import { Card, CardContent, CardHeader } from '../ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

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

export function BalanceSummaryCard() {
  return (
    <Card className="relative flex h-full w-full flex-1 flex-col overflow-hidden px-0 pb-0">
      <CardHeader className="flex-shrink-0 flex-row items-center justify-start gap-4 pb-3 pt-6">
        <h3 className="text-3xl font-medium">$60,000</h3>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4 px-0 pb-0">
        {/* Top Section */}
        <div className="flex-shrink-0 px-6">
          <div className="flex items-center gap-2">
            <div className="w-max rounded-full bg-blue-500 p-1.5">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
            <h4 className="font-normal text-blue-500">+3,650.23%</h4>
            <span>(+16.21%)</span>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            6% more than last week at this period
          </div>
        </div>

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
