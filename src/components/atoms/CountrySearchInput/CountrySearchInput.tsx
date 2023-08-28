import SearchIcon from "@mui/icons-material/Search";
import { useCallback } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./CountrySearchInput.styles";
import { useTranslation } from "@/hooks/useTranslation";
import { useCountryContext } from "@/contexts";

export function CountrySearchInput() {
  const { searchValue, setSearchValue } = useCountryContext();

  const { t } = useTranslation();

  const handleChange = useCallback(
    (event) => {
      setSearchValue(event.target.value);
    },
    [setSearchValue]
  );

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: (theme) => theme.palette.primary.main }} />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchValue}
        placeholder={t("search.for.a.country")}
        onChange={handleChange}
      />
    </Search>
  );
}
