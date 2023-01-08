import { useApi, UseQueryOptions } from "@/hooks/api/useApi";
import { AxiosRequestConfig } from "axios";

const COUNTRY_API_URL = process.env.COUNTRY_API_URL;

export function useCountriesApi<Data>(
  path: string,
  useQueryOptions?: UseQueryOptions<Data>,
  axiosRequestConfig?: AxiosRequestConfig<Data>
) {
  return useApi(
    `${COUNTRY_API_URL}${path}`,
    useQueryOptions,
    axiosRequestConfig
  );
}
