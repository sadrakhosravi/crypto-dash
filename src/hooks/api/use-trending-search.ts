import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { apiClient } from '@/utils/api-client';

export interface CoinData {
  price: number;
  price_btc: string;
  price_change_percentage_24h: {
    usd: number;
  };
  market_cap: string;
  market_cap_btc: string;
  total_volume: string;
  total_volume_btc: string;
  sparkline: string;
  content: null | string;
}

export interface CoinItem {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
  data: CoinData;
}

export interface Coin {
  item: CoinItem;
}

export interface TrendingSearch {
  coins: Coin[];
}

/**
 * @returns the trending search market data.
 */
export const useTrendingSearch = (): UseQueryResult<TrendingSearch> => {
  return useQuery<TrendingSearch>({
    queryKey: ['trending-search'],
    queryFn: () =>
      apiClient(`/search/trending`, {
        method: 'GET',
      }),
  });
};
