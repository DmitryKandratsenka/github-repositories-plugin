import { FilterByRegionDropdown, Toolbar } from "@/components/molecules";
import { CountrySearchInput } from "@/components/atoms";
import { Box } from "@mui/material";

export function HomePageToolbar() {
  return (
    <Toolbar>
      <Box
        sx={{
          marginRight: (theme) => theme.spacing(5),
          marginBottom: (theme) => theme.spacing(5),
          width: "100%",
        }}
      >
        <CountrySearchInput />
      </Box>
      <Box
        sx={{
          marginBottom: (theme) => theme.spacing(5),
        }}
      >
        <FilterByRegionDropdown />
      </Box>
    </Toolbar>
  );
}
