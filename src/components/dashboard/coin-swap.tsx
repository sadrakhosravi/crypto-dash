import * as React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { CoinInfo } from '../coin-info';
import { ArrowDownUp, Bitcoin, DollarSign } from 'lucide-react';
import { Slider } from '../ui/slider';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { DotPattern } from '../ui/dotpattern';
import { cn } from '@/lib/utils';

export const CoinSwap = () => {
  return (
    <Card className="h-full overflow-clip">
      <CardHeader className="relative m-1 shrink-0 gap-6 rounded-md bg-primary/10 pb-12 pt-6">
        <div className="flex flex-row items-center justify-between gap-4">
          <CoinInfo icon={Bitcoin} name="Bitcoin" symbol="BTC" />
          <div className="flex flex-col items-end">
            <span className="text-muted-foreground">Balance: $50,000</span>
            <h3 className="text-base font-medium">1 BTC</h3>
          </div>
        </div>
        <div>
          <Slider step={0.2} value={[50]} />
        </div>
      </CardHeader>
      <CardContent className="relative">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full p-2">
              <ArrowDownUp className="h-10 w-10" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Swap Money</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex justify-between pt-12">
          <div className="flex gap-3">
            <div className="rounded-lg bg-yellow-600 p-2">
              <DollarSign className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Receive</p>
              <h3 className="text-base font-semibold leading-tight">USD</h3>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              Exchange Rate: 0.123
            </p>
            <h3 className="leading-tigh t text-base font-semibold">$50,000</h3>
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
      </CardContent>
    </Card>
  );
};
