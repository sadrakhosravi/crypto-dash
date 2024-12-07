import React from 'react';
import { version } from '../../package.json'; // Adjust the path based on your file structure

type LogoProps = {
  width?: number;
  height?: number;
  fill?: string;
  hideText?: boolean;
};

export function Logo({
  width = 100,
  height = 100,
  fill = 'white',
  hideText,
}: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-lg bg-blue-500 p-1.5">
        <svg
          width={width}
          height={height}
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          <path
            d="M499.243 174.318V499.903L425.04 457.501C293.291 381.784 211.516 240.949 211.516 88H157V460.53C157 581.678 226.66 693.74 337.207 746.742L500.757 825.488V499.903L574.96 542.305C706.709 618.022 788.484 758.857 788.484 911.806H843V539.276C843 418.128 773.34 306.066 662.793 253.064L499.243 174.318Z"
            fill={fill}
          />
        </svg>
      </div>

      {!hideText && (
        <div>
          <p className="h-4 text-[1rem] font-medium">Crypto Dash</p>
          <p className="mb-[-2px] text-[10px] text-muted-foreground">
            Version: {version}
          </p>
        </div>
      )}
    </div>
  );
}

Logo.displayName = 'Logo';
