import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./SearchInput.styles";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "@/hooks/useTranslation";

export function SearchInput() {
  const { t } = useTranslation();
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: (theme) => theme.palette.primary.main }} />
      </SearchIconWrapper>
      <StyledInputBase placeholder={t("search.for.a.country")} />
    </Search>
  );
}
