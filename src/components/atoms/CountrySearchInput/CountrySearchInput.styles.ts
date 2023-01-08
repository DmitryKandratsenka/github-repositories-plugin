import { InputBase, styled } from "@mui/material";
import { MOBILE_WIDTH } from "@/theme";

const SEARCH_INPUT_DESKTOP_WIDTH = 600;

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  width: "100%",
  height: 60,
  minWidth: 280,
  boxShadow: `0px 0px 5px 0px ${theme.palette.primary.main}`,
  [theme.breakpoints.up(MOBILE_WIDTH)]: {
    maxWidth: SEARCH_INPUT_DESKTOP_WIDTH,
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "100%",
  width: "100%",
  [theme.breakpoints.up(MOBILE_WIDTH)]: {
    maxWidth: SEARCH_INPUT_DESKTOP_WIDTH,
  },
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
}));
