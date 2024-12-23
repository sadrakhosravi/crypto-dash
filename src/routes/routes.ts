import { AlertCircle, LayoutGrid, Wallet2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Define the structure of a route
export type Route = {
  name: string; // The name of the route
  path: string; // The URL path
  icon: LucideIcon; // The Lucide icon for the route
};

// Define the routes as a typed array
export const routes: Route[] = [
  {
    name: 'Dashboard',
    path: '/',
    icon: LayoutGrid,
  },
  {
    name: 'Wallet',
    path: '/wallet',
    icon: Wallet2,
  },
  {
    name: 'Not Found',
    path: '/404',
    icon: AlertCircle,
  },
];
