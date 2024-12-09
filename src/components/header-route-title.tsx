'use client';

import { routes } from '@/routes/routes';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export const HeaderRouteTitle = () => {
  const pathname = usePathname();
  const route = routes.find((route) => route.path === pathname);

  return <span>{route?.name || 'Not Found'}</span>;
};
