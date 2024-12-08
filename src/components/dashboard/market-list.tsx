import React from 'react';
import { Bitcoin, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CryptoCard } from './crypto-card';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { DotPattern } from '../ui/dotpattern';

export function MarketList() {
  return (
    <Card className="relative h-full overflow-clip border">
      <CardContent className="flex flex-col py-4">
        <CryptoCard
          name="Bitcoin"
          symbol="BTC"
          icon={<Bitcoin className="h-6 w-6 text-white" />}
          price="66,971.32"
          change="+1.63%"
          changePositive
          chart={<div />}
        />
        <Separator />
        <CryptoCard
          name="Ethereum"
          symbol="ETH"
          icon={<Bitcoin className="h-6 w-6 text-white" />}
          price="3,481.47"
          change="-0.69%"
          changePositive={false}
          chart={<div />}
        />
        <Separator />

        <CryptoCard
          name="Bitcoin Cash"
          symbol="BCH"
          icon={<DollarSign className="h-6 w-6 text-white" />}
          price="430.66"
          change="-3.95%"
          changePositive={false}
          chart={<div />}
        />

        <div className="absolute bottom-[-200px] right-[30px] z-0 block h-[300px] w-[100px] -translate-x-1/2 rotate-180 rounded-full bg-blue-500 opacity-40 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[30px] z-0 block h-[100px] w-[100px] -translate-x-1/2 rotate-180 rounded-full bg-white opacity-30 blur-3xl" />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            'absolute bottom-0 right-0 h-full rotate-180 opacity-40 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]',
          )}
        />
      </CardContent>
    </Card>
  );
}
