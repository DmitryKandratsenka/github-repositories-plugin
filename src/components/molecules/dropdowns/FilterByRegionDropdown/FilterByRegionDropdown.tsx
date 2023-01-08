import { Dropdown, Option } from "@/components/molecules";
import { useTranslation } from "@/hooks/useTranslation";
import { useCallback, useMemo } from "react";
import { REGIONS } from "@/constants/Region";
import { useCountryContext } from "@/contexts";

export function FilterByRegionDropdown() {
  const { filterByRegion, setFilterByRegion } = useCountryContext();
  const { t } = useTranslation();

  const options = useMemo(
    () =>
      REGIONS.map((region) => ({ label: region.name, value: region.value })),
    []
  );

  const handleChange = useCallback(
    (value: Option) => {
      setFilterByRegion(value);
    },
    [setFilterByRegion]
  );

  return (
    <Dropdown
      placeholder={t("filter.by.region")}
      options={options}
      onChange={handleChange}
      selectedOption={filterByRegion}
    />
  );
}
