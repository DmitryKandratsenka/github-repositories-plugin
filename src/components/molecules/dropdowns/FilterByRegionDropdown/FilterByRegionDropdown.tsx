import { Dropdown } from "@/components/molecules";
import { useTranslation } from "@/hooks/useTranslation";

export function FilterByRegionDropdown() {
  const { t } = useTranslation();

  return <Dropdown placeholder={t("filter.by.region")} />;
}
