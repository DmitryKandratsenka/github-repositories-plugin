import { AxiosRequestConfig } from "axios";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions as UseReactQueryOptions,
  UseQueryResult,
} from "react-query";
import { useQuery as useReactQuery } from "react-query";

export type UseQueryOptions<Data> = Omit<
  UseReactQueryOptions<Data>,
  "queryFn" | "queryKey"
>;

export function useQuery<Data>(
  url: string,
  queryFn: QueryFunction<Data, QueryKey>,
  useQueryOptions?: UseQueryOptions<Data>,
  axiosConfig?: AxiosRequestConfig<Data>
): UseQueryResult<Data> {
  return useReactQuery<Data>(
    [url, axiosConfig?.params, axiosConfig?.baseURL],
    queryFn,
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: 1,
      retryDelay: 2,
      ...useQueryOptions,
    }
  );
}
