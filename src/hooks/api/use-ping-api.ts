import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { apiClient } from '@/utils/api-client';

type PingResponse = {
  gecko_says: string;
};

/**
 * Fetches the ping data.
 * @returns the ping data.
 */
export const usePingApi = (): UseQueryResult<PingResponse> => {
  return useQuery<PingResponse>({
    queryKey: ['ping'],
    queryFn: () =>
      apiClient('/ping', {
        method: 'GET',
      }),
  });
};
