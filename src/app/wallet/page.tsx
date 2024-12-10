import { Loader } from '@/components/ui/loader';
import AddCryptoForm from '@/components/wallet/add-crypto-form';
import { ServerCryptoList } from '@/components/wallet/server-crypto-list';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Wallet | Crypto Dashboard',
  description: 'A dashboard to track your crypto investments',
};

export default function Wallet() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full flex-col items-stretch gap-2 p-6 lg:flex-row">
        {/* ServerCryptoList Section */}
        <div className="w-full lg:w-1/2">
          <Suspense fallback={<Loader />}>
            <ServerCryptoList />
          </Suspense>
        </div>

        {/* AddCryptoForm Section */}
        <div className="mt-4 h-full w-full md:mt-0 lg:w-1/2">
          <Suspense fallback={<Loader />}>
            <AddCryptoForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
