'use client';

import { z } from 'zod';

export const formSchema = z.object({
  symbol: z
    .string()
    .min(2, { message: 'Symbol must be at least 2 characters long' })
    .max(50, { message: 'Symbol must be at most 50 characters long' }),
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be at most 50 characters long' }),
  price: z.coerce.number().int({ message: 'Price must be an integer' }),
  market_cap: z
    .string()
    .min(2, { message: 'Market cap must be at least 2 characters long' })
    .max(50, { message: 'Market cap must be at most 50 characters long' }),
});
