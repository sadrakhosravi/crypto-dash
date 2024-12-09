import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { apiClient } from '@/utils/api-client';

type BitcoinPriceData = {
  market_data: {
    sparkline_7d: {
      price: number[];
    };
    current_price: {
      usd: number;
    };
    price_change_24h_in_currency: {
      usd: number;
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
};

export const useCoinPrice = (
  coinId: string,
): UseQueryResult<BitcoinPriceData> => {
  return useQuery<BitcoinPriceData>({
    queryKey: ['coin-price', coinId],
    queryFn: () =>
      apiClient(`/coins/${coinId}?sparkline=true`, {
        method: 'GET',
      }),
  });
};
