import { PropsWithChildren, useMemo, useState } from "react";
import { CountryContext, CountryContextI } from "@/contexts";
import { Option } from "@/components/molecules";

export function CountryContextProvider({ children }: PropsWithChildren<{}>) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterByRegion, setFilterByRegion] = useState<Option | undefined>(
    undefined
  );

  const value = useMemo<CountryContextI>(
    () => ({
      filterByRegion,
      searchValue,
      setFilterByRegion: (value: Option) => setFilterByRegion(value),
      setSearchValue: (value: string) => setSearchValue(value),
    }),
    [searchValue, filterByRegion]
  );

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
