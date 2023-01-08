import { Button, List, styled } from "@mui/material";
// import { KeyboardArrowDownIcon as KeyboardArrowDownIconMui } from "@mui/icons-material";
import KeyboardArrowDownIconMui from "@mui/icons-material/KeyboardArrowDown";

export const DropdownContainer = styled("div")(() => ({}));

export const DropdownButton = styled(Button)(({ theme }) => ({
  height: 60,
  minWidth: 190,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  padding: theme.spacing(3),
  background: theme.palette.background.default,
  boxShadow: `0px 0px 5px 0px ${theme.palette.primary.main}`,
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.primary.dark,
  textTransform: "none",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 300,
  },
}));

export const DropdownList = styled(List)(({ theme }) => ({
  minWidth: 190,
  boxSizing: "border-box",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    minWidth: 300,
  },
}));

export const KeyboardArrowDownIcon = styled(KeyboardArrowDownIconMui)(
  ({ theme }) => ({})
);
