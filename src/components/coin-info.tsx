import * as React from 'react';
import Image from 'next/image';
import Placeholder from '../../public/imgs/placeholder.png';

type CoinInfoProps = {
  img: string;
  name: string;
  symbol: string;
  color?: string;
  swapText?: boolean;
};

export const CoinInfo = ({
  img,
  name,
  symbol,
  color,
  swapText,
}: CoinInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className="rounded-lg"
        style={{
          backgroundColor: color,
        }}
      >
        <Image
          src={img || Placeholder}
          width={48}
          height={48}
          alt={name + ' Logo'}
        />
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
