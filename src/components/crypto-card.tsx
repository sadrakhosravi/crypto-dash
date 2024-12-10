import * as React from 'react';
import { cn, USDollar } from '@/lib/utils'; // Helper function for conditional classNames
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { CoinInfo } from './coin-info';
import Image from 'next/image';

type CryptoCardProps = {
  name: string;
  symbol: string;
  img: string;
  price: number;
  change: string;
  changePositive: boolean;
  trendImg?: string;
};

export function CryptoCard({
  name,
  symbol,
  img,
  price,
  change,
  changePositive,
  trendImg,
}: CryptoCardProps) {
  return (
    <div className="z-10 flex flex-row items-center justify-between gap-3 rounded-lg p-2 shadow-md md:gap-6 md:p-4 lg:gap-10">
      <CoinInfo img={img} name={name} symbol={symbol} />

      {trendImg && (
        <div className="flex-grow">
          <Image
            src={trendImg}
            className="h-12 w-[100%]"
            width={200}
            height={40}
            alt="Trend Image"
          />
        </div>
      )}
      <div className="flex flex-col items-end">
        <h3 className="text-base font-semibold">{USDollar.format(price)}</h3>
        <div
          className={cn(
            'flex items-center gap-1 text-sm',
            changePositive ? 'text-green-400' : 'text-red-400',
          )}
        >
          {changePositive ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownRight className="h-4 w-4" />
          )}
          <span className="text-xs">{change}</span>
        </div>
      </div>
    </div>
  );
}

export default CryptoCard;
