'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CryptoCard } from './crypto-card';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { DotPattern } from '../ui/dotpattern';
import { ScrollArea } from '../ui/scroll-area';
import { useTrendingSearch } from '@/hooks/api/use-trending-search';
import { Loader } from '../ui/loader';
import BlurFade from '../ui/blur-fade';

export function MarketList() {
  const { data, isPending } = useTrendingSearch();
  const markets = data?.coins.slice(0, 5);

  return (
    <Card className="relative h-full overflow-clip border">
      <CardContent className="flex flex-col py-4">
        <ScrollArea className="h-72">
          {isPending ? (
            <Loader />
          ) : (
            <>
              {markets?.map((market) => (
                <React.Fragment key={market.item.coin_id}>
                  <BlurFade delay={0.25} inView>
                    <CryptoCard
                      key={
                        market.item.id + market.item.coin_id + market.item.name
                      }
                      name={market.item.name}
                      symbol={market.item.symbol}
                      img={market.item.small}
                      price={market.item.data.price}
                      change={market.item.data.price_change_percentage_24h.usd.toFixed(
                        2,
                      )}
                      changePositive={
                        market.item.data.price_change_percentage_24h.usd > 0
                      }
                      trendImg={market.item.data.sparkline}
                    />
                    <Separator className="my-2" />
                  </BlurFade>
                </React.Fragment>
              ))}
            </>
          )}
        </ScrollArea>
        <div className="absolute bottom-[-200px] right-[30px] z-0 block h-[300px] w-[100px] -translate-x-1/2 rotate-180 rounded-full bg-blue-500 opacity-40 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[30px] z-0 block h-[100px] w-[100px] -translate-x-1/2 rotate-180 rounded-full bg-white opacity-30 blur-3xl" />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            'absolute bottom-0 right-0 z-0 h-full rotate-180 opacity-40 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]',
          )}
        />
      </CardContent>
    </Card>
  );
}
