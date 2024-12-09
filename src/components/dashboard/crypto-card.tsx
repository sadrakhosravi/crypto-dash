import * as React from 'react';
import { cn } from '@/lib/utils'; // Helper function for conditional classNames
import { ArrowUpRight, ArrowDownRight, Bitcoin } from 'lucide-react';
import { CoinInfo } from '../coin-info';

type CryptoCardProps = {
  name: string;
  symbol: string;
  icon: React.ReactNode;
  price: string;
  change: string;
  changePositive: boolean;
  chart: React.ReactNode;
};

export function CryptoCard({
  name,
  symbol,
  icon,
  price,
  change,
  changePositive,
  chart,
}: CryptoCardProps) {
  return (
    <div className="flex flex-row items-center gap-4 rounded-lg p-4 shadow-md">
      <CoinInfo img="" name="Bitcoin" symbol="BTC" />

      <div className="flex-grow">{chart}</div>
      <div className="flex flex-col items-end">
        <h3 className="text-base font-semibold">${price}</h3>
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
