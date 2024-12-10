'use client';

import * as React from 'react';
import { usePingApi } from '@/hooks/api/use-ping-api';
import { Badge } from './ui/badge';

export const ApiResponseStatus = () => {
  const { status } = usePingApi();
  return (
    <div className="">
      {status === 'success' && (
        <Badge
          className="h-8 w-max border border-green-600 bg-green-600 text-white hover:bg-green-600"
          variant="secondary"
        >
          API: Online
        </Badge>
      )}
      {status === 'error' && (
        <Badge
          className="h-8 w-max border border-rose-600 bg-rose-600 text-white hover:bg-rose-600"
          variant="destructive"
        >
          API: Error
        </Badge>
      )}
    </div>
  );
};
