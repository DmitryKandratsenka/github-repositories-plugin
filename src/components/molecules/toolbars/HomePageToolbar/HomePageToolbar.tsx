import { Box } from "@mui/material";
import {
  FilterByRegionDropdown,
  Toolbar,
  ToolbarItemContainer,
} from "@/components/molecules";
import { CountrySearchInput } from "@/components/atoms";

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
