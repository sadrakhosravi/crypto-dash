import React from 'react';
import { cn } from '@/lib/utils';
import { CryptoCard } from '../crypto-card';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import { DotPattern } from '../ui/dotpattern';
import { ScrollArea } from '../ui/scroll-area';
import { useTrendingSearch } from '@/hooks/api/use-trending-search';
import { Loader } from '../ui/loader';
import BlurFade from '../ui/blur-fade';

import BitcoinImgSrc from '../../../public/imgs/bitcoin.png';
import DogeImgSrc from '../../../public/imgs/doge.png';
import EthImgSrc from '../../../public/imgs/eth.png';

type CryptoData = {
  [key: string]: {
    market_cap: string;
    name: string;
    price: number;
  };
};

export async function ServerCryptoList() {
  const response = await fetch(
    'https://atsym9enh8.execute-api.us-west-1.amazonaws.com/Prod/cryptos',
    {
      method: 'GET',
      cache: 'no-store', // Ensures the data is always fetched fresh from the API
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch crypto data');
  }

  const data = (await response.json()) as CryptoData;
  const dataAsArray = Object.entries(data);

  return (
    <Card className="relative h-full overflow-clip border">
      <CardContent className="flex w-full flex-col py-4">
        <ScrollArea className="h-full w-full">
          <h2 className="mb-4 text-xl">Crypto Lists on Server</h2>

          {dataAsArray?.map((market, i) => (
            <React.Fragment key={market[1].name + i}>
              <BlurFade delay={0.25} inView>
                <CryptoCard
                  key={market[1].name + i + 'crypto'}
                  name={market[1].name}
                  symbol={market[1].name}
                  img={
                    (market[1].name === 'Bitcoin'
                      ? BitcoinImgSrc
                      : market[1].name === 'Ethereum'
                        ? EthImgSrc
                        : DogeImgSrc) as any
                  }
                  price={market[1].price}
                  change={market[1].market_cap}
                  changePositive={true}
                />
                {i !== dataAsArray.length - 1 && <Separator className="my-2" />}
              </BlurFade>
            </React.Fragment>
          ))}
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
