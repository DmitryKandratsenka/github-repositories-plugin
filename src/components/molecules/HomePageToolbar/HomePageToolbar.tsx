import { FilterByRegionDropdown, Toolbar } from "@/components/molecules";
import { SearchInput } from "@/components/atoms";

export function MainPageToolbar() {
  return (
    <Toolbar>
      <SearchInput />
      <FilterByRegionDropdown />
    </Toolbar>
  );
}
