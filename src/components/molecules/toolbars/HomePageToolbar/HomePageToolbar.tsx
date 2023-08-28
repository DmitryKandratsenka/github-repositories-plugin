import { Box } from '@mui/material';
import {
  FilterDropdown,
  Toolbar,
  ToolbarItemContainer,
} from '@/components/molecules';
import { RepositorySearchInput } from '@/components/atoms';

export function HomePageToolbar() {
  return (
    <Toolbar>
      <Box
        sx={{
          marginRight: (theme) => theme.spacing(5),
          width: '100%',
        }}
      >
        <RepositorySearchInput />
      </Box>
      <ToolbarItemContainer>
        <FilterDropdown />
      </ToolbarItemContainer>
    </Toolbar>
  );
}
