import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "@/hooks/api/useQuery";
import type {
  UseQueryOptions as UseReactQueryOptions,
  UseQueryResult,
} from "react-query";

export type UseQueryOptions<Data> = Omit<
  UseReactQueryOptions<Data>,
  "queryFn" | "queryKey"
>;
export function useApi<Data>(
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
    axiosRequestConfig
  );
}
