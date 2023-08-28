import { Button, List, styled } from '@mui/material';
// import { KeyboardArrowDownIcon as KeyboardArrowDownIconMui } from "@mui/icons-material";
import KeyboardArrowDownIconMui from '@mui/icons-material/KeyboardArrowDown';

export const DropdownContainer = styled('div')(() => ({}));

export const DropdownButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.default,
  boxShadow: `0px 0px 5px 0px ${theme.palette.primary.main}`,
  color: theme.palette.primary.dark,
  display: 'flex',
  height: 60,
  justifyContent: 'space-between',
  minWidth: 190,
  padding: theme.spacing(3),
  textOverflow: 'ellipsis',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: 300,
  },
}));

export const DropdownList = styled(List)(({ theme }) => ({
  boxSizing: 'border-box',
  minWidth: 190,
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    minWidth: 300,
  },
}));

export const KeyboardArrowDownIcon = styled(KeyboardArrowDownIconMui)(
  () => ({})
);
