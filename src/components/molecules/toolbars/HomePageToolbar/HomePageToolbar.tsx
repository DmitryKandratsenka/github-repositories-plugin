import {
  FilterByRegionDropdown,
  Toolbar,
  ToolbarItemContainer,
} from "@/components/molecules";
import { CountrySearchInput } from "@/components/atoms";
import { Box } from "@mui/material";

export function HomePageToolbar() {
  return (
    <Toolbar>
      <Box
        sx={{
          marginRight: (theme) => theme.spacing(5),
          width: "100%",
        }}
      >
        <CountrySearchInput />
      </Box>
      <ToolbarItemContainer>
        <FilterByRegionDropdown />
      </ToolbarItemContainer>
    </Toolbar>
  );
}
