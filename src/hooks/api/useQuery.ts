import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions as UseReactQueryOptions,
  UseQueryResult,
} from 'react-query';
import { useQuery as useReactQuery } from 'react-query';

export type UseQueryOptions<Data> = Omit<
  UseReactQueryOptions<Data>,
  'queryFn' | 'queryKey'
>;

export interface QueryKeyProps {
  baseUrl?: string;
  params?: string;
}

export function useQuery<Data>(
  queryKey: string,
  queryFn: QueryFunction<Data, QueryKey>,
  useQueryOptions?: UseQueryOptions<Data>,
  queryKeyProps?: QueryKeyProps
): UseQueryResult<Data> {
  return useReactQuery<Data>(
    [queryKey, queryKeyProps?.params, queryKeyProps?.baseUrl],
    queryFn,
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: 5,
      retryDelay: 3000,
      ...useQueryOptions,
    }
  );
}
