import { useCountriesApi } from "@/hooks/api/rest-countries/useCountriesApi";
import { CountryDetails } from "@/hooks/api/rest-countries/types";

export function useCountryByCode(code: string | undefined) {
  return useCountriesApi<CountryDetails>(
    `/alpha/${code}?fields=name,population,flag,capital,region,alpha3Code,nativeName,subregion,topLevelDomain,languages`,
    { enabled: !!code, cacheTime: Infinity, staleTime: Infinity }
  );
}
