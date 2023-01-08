import { useCountriesApi } from "@/hooks/api/rest-countries/useCountriesApi";
import { CountryBase } from "@/hooks/api/rest-countries/types";

export function useAllCountries() {
  return useCountriesApi<CountryBase[]>(
    "/all?fields=name,population,flag,capital,region"
  );
}
