import { createContext, useContext } from "react";
import { Option } from "@/components/molecules";

const initialCountryContext: CountryContextI = {
  filterByRegion: undefined,
  searchValue: "",
  setFilterByRegion: () => {},
  setSearchValue: () => {},
};

export interface CountryContextI {
  filterByRegion: Option | undefined;
  searchValue: string;
  setFilterByRegion: (value: Option) => void;
  setSearchValue: (value: string) => void;
}

export const CountryContext = createContext(initialCountryContext);

export function useCountryContext() {
  return useContext<CountryContextI>(CountryContext);
}
