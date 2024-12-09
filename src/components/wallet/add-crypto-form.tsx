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
import { toast } from 'sonner';
import { Loader } from '../ui/loader';

const AddCryptoForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

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
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Accept', '*/*');
    myHeaders.append('Accept-Encoding', 'gzip, deflate, br');

    const raw = JSON.stringify({
      ...values,
    });

    setLoading(true);

    fetch('/api/crypto', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    })
      .then(async (response) => {
        setLoading(false);

        if (!response.ok) {
          const error = await response.json();
          toast.error(error['error'], {
            position: 'top-center',
          });
          return;
        }
        toast.success('Crypto added successfully', {
          position: 'top-center',
        });
        return response.json();
      })
      .then((result) => console.log(result))
      .catch((error) =>
        toast.error('Error adding crypto', {
          position: 'top-center',
        }),
      );

    setLoading(false);
  }

  return (
    <Card className="relative h-full overflow-clip border">
      <CardContent className="flex w-full flex-col py-4">
        <ScrollArea className="relative h-full w-full">
          {loading && (
            <div className="absolute left-0 top-0 z-[50] flex h-full w-full items-center justify-center">
              <Loader />
            </div>
          )}
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
                <Button
                  className="h-12 w-full"
                  type="submit"
                  disabled={loading}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>

          <div className="mt-4 text-foreground/70">
            If your addition is successful, please reload the page to see the
            new crypto.
          </div>
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
