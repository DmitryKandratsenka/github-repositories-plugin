import { createContext, useContext } from "react";
import { Option } from "@/components/molecules";

const initialCountryContext: CountryContextI = {
  searchValue: "",
  filterByRegion: undefined,
  setSearchValue: () => {},
  setFilterByRegion: () => {},
};

export interface CountryContextI {
  searchValue: string;
  filterByRegion: Option | undefined;
  setSearchValue: (value: string) => void;
  setFilterByRegion: (value: Option) => void;
}

export const CountryContext = createContext(initialCountryContext);

export function useCountryContext() {
  return useContext<CountryContextI>(CountryContext);
}
