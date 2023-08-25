import axios, { AxiosRequestConfig } from "axios";
import type {
  UseQueryOptions as UseReactQueryOptions,
  UseQueryResult,
} from "react-query";
import { useQuery } from "@/hooks/api/useQuery";

export type UseQueryOptions<Data> = Omit<
  UseReactQueryOptions<Data>,
  "queryFn" | "queryKey"
>;
export function useAxiosQueryClient<Data>(
  url: string,
  useQueryOptions?: UseQueryOptions<Data>,
  axiosRequestConfig?: AxiosRequestConfig<Data>
): UseQueryResult<Data> {
  return useQuery<Data>(
    url,
    async () => {
      const { data } = await axios.request<Data>({
        url,
        ...axiosRequestConfig,
      });

      return data;
    },
    useQueryOptions,
    { baseUrl: axiosRequestConfig?.baseURL, params: axiosRequestConfig?.params }
  );
}
