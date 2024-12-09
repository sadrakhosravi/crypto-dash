import * as React from 'react';

export const Loader = () => {
  return (
    <div className="flex h-52 justify-center py-6">
      <div className="flex h-36 w-40 items-center justify-center">
        <div className="flex h-12 rotate-180 items-center">
          <div className="m-0.5 ml-0.5 h-full w-2 animate-[bars_1.2s_ease-in-out_infinite] bg-secondary-foreground/30"></div>
          <div
            className="m-0.5 ml-0.5 h-full w-2 animate-[bars_1.2s_ease-in-out_infinite] bg-secondary-foreground/30"
            style={{
              animationDelay: '0.3s',
            }}
          ></div>
          <div
            className="m-0.5 ml-0.5 h-full w-2 animate-[bars_1.2s_ease-in-out_infinite] bg-secondary-foreground/30"
            style={{
              animationDelay: '0.6s',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
