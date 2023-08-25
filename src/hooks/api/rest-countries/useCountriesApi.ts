import { AxiosRequestConfig } from "axios";
import {
  useAxiosQueryClient,
  UseQueryOptions,
} from "@/hooks/api/useAxiosQueryClient";

const { COUNTRY_API_URL } = process.env;

export function useCountriesApi<Data>(
  path: string,
  useQueryOptions?: UseQueryOptions<Data>,
  axiosRequestConfig?: AxiosRequestConfig<Data>
) {
  return useAxiosQueryClient(
    `${COUNTRY_API_URL}${path}`,
    useQueryOptions,
    axiosRequestConfig
  );
}
