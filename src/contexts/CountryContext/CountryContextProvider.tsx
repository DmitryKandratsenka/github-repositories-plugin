import { CountryContext, CountryContextI } from "@/contexts";
import { PropsWithChildren, useMemo, useState } from "react";
import { Option } from "@/components/molecules";

export function CountryContextProvider({ children }: PropsWithChildren<{}>) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterByRegion, setFilterByRegion] = useState<Option | undefined>(
    undefined
  );

  const value = useMemo<CountryContextI>(
    () => ({
      searchValue,
      filterByRegion,
      setSearchValue: (value: string) => setSearchValue(value),
      setFilterByRegion: (value: Option) => setFilterByRegion(value),
    }),
    [searchValue, filterByRegion]
  );

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
