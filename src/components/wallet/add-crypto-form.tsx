'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { DotPattern } from '../ui/dotpattern';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './form-schema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const AddCryptoForm: React.FC = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      symbol: '',
      price: 0,
      market_cap: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch(
      'https://atsym9enh8.execute-api.us-west-1.amazonaws.com/Prod/crypto',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          symbol: values.symbol.toUpperCase(), // Ensure symbol is uppercase
          price: values.price,
          market_cap: values.market_cap,
        }),
      },
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.error || 'Failed to add cryptocurrency.');
          });
        }
        return response.json();
      })
      .then((data) => {
        alert(`Success: ${data.message}`);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  }

  return (
    <Card className="relative h-full overflow-clip border">
      <CardContent className="flex w-full flex-col py-4">
        <ScrollArea className="h-full w-full">
          <h2 className="mb-4 text-xl">Add New Crypto</h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="m-1 space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Name of the new crypto </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="symbol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Symbol</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Symbol of the new crypto (eg. BTC){' '}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>
                      Current price of the new crypto
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="market_cap"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Market Cap</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Market cap of the new crypto (eg. 1B)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full text-right">
                <Button className="h-12 w-full" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </ScrollArea>

        <div className="absolute bottom-[-200px] right-[30px] z-0 block h-[300px] w-[100px] -translate-x-1/2 rotate-180 rounded-full bg-blue-500 opacity-40 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[30px] z-0 block h-[100px] w-[100px] -translate-x-1/2 rotate-180 rounded-full bg-white opacity-30 blur-3xl" />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            'absolute bottom-0 right-0 z-0 h-full rotate-180 opacity-40 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]',
          )}
        />
      </CardContent>
    </Card>
  );
};

export default AddCryptoForm;
