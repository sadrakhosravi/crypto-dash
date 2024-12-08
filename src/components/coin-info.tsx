import * as React from 'react';
import type { LucideIcon } from 'lucide-react';

type CoinInfoProps = {
  icon: LucideIcon;
  name: string;
  symbol: string;
  color?: string;
  swapText?: boolean;
};

export const CoinInfo = ({
  icon: Icon,
  name,
  symbol,
  color,
  swapText,
}: CoinInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className="rounded-lg bg-yellow-600 p-2"
        style={{
          backgroundColor: color,
        }}
      >
        <Icon className="h-7 w-7" />
      </div>
      <div>
        {swapText ? (
          <>
            <p className="text-sm text-muted-foreground">{symbol}</p>
            <h3 className="text-base font-semibold leading-tight">{name}</h3>
          </>
        ) : (
          <>
            <h3 className="text-base font-semibold leading-tight">{symbol}</h3>
            <p className="text-sm text-muted-foreground">{name}</p>
          </>
        )}
      </div>
    </div>
  );
};

CoinInfo.displayName = 'CoinInfo';
