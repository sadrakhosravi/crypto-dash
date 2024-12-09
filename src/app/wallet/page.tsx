import { Loader } from '@/components/ui/loader';
import AddCryptoForm from '@/components/wallet/add-crypto-form';
import { ServerCryptoList } from '@/components/wallet/server-crypto-list';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full items-stretch gap-2 p-6">
        <div className="h-full w-1/2">
          <Suspense fallback={<Loader />}>
            <ServerCryptoList />
          </Suspense>
        </div>
        <div className="h-full w-1/2">
          <Suspense fallback={<Loader />}>
            <AddCryptoForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
