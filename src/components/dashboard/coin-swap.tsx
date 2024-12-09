'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { ArrowDownUp, DollarSign } from 'lucide-react';
import { Slider } from '../ui/slider';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { DotPattern } from '../ui/dotpattern';
import { cn, USDollar } from '@/lib/utils';
import { useCoinPrice } from '@/hooks/api/use-coin-price';
import { useTrendingSearch } from '@/hooks/api/use-trending-search';
import Image from 'next/image';
import Placeholder from '../../../public/imgs/placeholder.png';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { SwapDialog } from './swap-dialog';
import BlurFade from '../ui/blur-fade';

export const CoinSwap = () => {
  const [selectedCoin, setSelectedCoin] = React.useState<string>('Bitcoin');
  const [sliderValue, setSliderValue] = React.useState<number>(0);
  const { data: trendingCoins } = useTrendingSearch();
  const { data } = useCoinPrice(selectedCoin.toLowerCase());

  return (
    <Card className="flex h-full flex-col justify-between overflow-clip">
      <BlurFade delay={0.5} inView className="m-1 mt-2">
        <CardHeader className="relative h-36 shrink-0 gap-4 rounded-md bg-primary/10">
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg">
                <Image
                  className="rounded-full"
                  src={data?.image.small || Placeholder}
                  width={48}
                  height={48}
                  alt={'image' + ' Logo'}
                />
              </div>
              <div>
                <>
                  <h3 className="text-base font-semibold leading-tight">
                    <Select
                      defaultValue={selectedCoin}
                      onValueChange={(value) => {
                        setSelectedCoin(value);
                      }}
                    >
                      <SelectTrigger className="flex w-full gap-2 border border-secondary-foreground/30 px-4">
                        <SelectValue
                          placeholder="Select a coin"
                          defaultValue={selectedCoin}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {trendingCoins?.coins.map((coin) => (
                            <SelectItem
                              key={coin.item.id}
                              value={coin.item.name}
                            >
                              {coin.item.name}
                            </SelectItem>
                          )) || []}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </h3>
                </>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-muted-foreground">Amount</span>
              <h3 className="text-base font-medium">
                {sliderValue} {data?.symbol.toUpperCase()}
              </h3>
            </div>
          </div>
          <div>
            <Slider
              step={0.001}
              defaultValue={[sliderValue]}
              onValueChange={(value) => {
                setSliderValue(value[0]);
              }}
              min={0}
              max={1}
            />
          </div>
        </CardHeader>
        <CardContent className="relative flex h-[calc(100%-9rem)] items-end">
          <div className="w-full pb-6">
            <SwapDialog />

            <div className="flex justify-between pt-12">
              <div className="flex gap-3">
                <div className="rounded-lg bg-blue-600 p-2">
                  <DollarSign className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Receive</p>
                  <h3 className="text-base font-semibold leading-tight">USD</h3>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-muted-foreground">Would Receive</p>
                <h3 className="leading-tigh t text-base font-semibold">
                  {USDollar.format(
                    (data?.market_data.current_price.usd || 0) * sliderValue,
                  )}
                </h3>
              </div>
            </div>
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
          </div>
        </CardContent>
      </BlurFade>
    </Card>
  );
};
