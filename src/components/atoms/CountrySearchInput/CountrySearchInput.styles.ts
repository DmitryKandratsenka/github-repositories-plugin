import { InputBase, styled } from "@mui/material";
import { MOBILE_WIDTH } from "@/theme";

const SEARCH_INPUT_DESKTOP_WIDTH = 600;

export const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0px 0px 5px 0px ${theme.palette.primary.main}`,
  height: 60,
  minWidth: 280,
  position: "relative",
  width: "100%",
  [theme.breakpoints.up(MOBILE_WIDTH)]: {
    maxWidth: SEARCH_INPUT_DESKTOP_WIDTH,
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
  position: "absolute",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up(MOBILE_WIDTH)]: {
      maxWidth: SEARCH_INPUT_DESKTOP_WIDTH,
    },
  },
  color: "inherit",
  height: "100%",
  [theme.breakpoints.up(MOBILE_WIDTH)]: {
    maxWidth: SEARCH_INPUT_DESKTOP_WIDTH,
  },
  width: "100%",
}));
