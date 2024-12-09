import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { apiClient } from '@/utils/api-client';

type PingResponse = {
  gecko_says: string;
};

export const usePingApi = (): UseQueryResult<PingResponse> => {
  return useQuery<PingResponse>({
    queryKey: ['get-studies'],
    queryFn: () =>
      apiClient('/ping', {
        method: 'GET',
      }),
  });
};
