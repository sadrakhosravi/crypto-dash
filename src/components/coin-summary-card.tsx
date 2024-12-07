"use client";

import * as React from "react";

// Icons
import { DotPattern } from "./ui/dotpattern";

// Components
import { Card, CardContent, CardHeader } from "./ui/card";
import { ArrowUpRight, Bitcoin } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Area, AreaChart } from "recharts";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const CoinSummaryCard = () => {
  return (
    <Card className="relative overflow-clip px-0 pb-0">
      <CardHeader className="flex-row items-center justify-center gap-4 pt-6">
        <div className="rounded-md bg-yellow-600 p-2">
          <Bitcoin className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">BTC</p>
          <h3 className="text-base font-semibold leading-tight">Bitcoin</h3>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0 pt-2">
        <div className="mx-auto max-w-[350px] px-4">
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

        <div className="pt-8">
          <ChartContainer config={chartConfig} className="h-[100px] w-full">
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

      <div className="absolute left-1/2 top-[-300px] z-0 block h-[300px] w-full -translate-x-1/2 rotate-180 rounded-full bg-yellow-600 opacity-50 blur-3xl" />
      <div className="absolute left-1/2 top-[-100px] z-0 block h-[100px] w-[50px] -translate-x-1/2 rotate-180 rounded-full bg-white opacity-30 blur-3xl" />
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "h-[300px] opacity-40 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />
    </Card>
  );
};
