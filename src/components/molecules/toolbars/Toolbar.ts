import { styled } from "@mui/material";

export const Toolbar = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const ToolbarItemContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(0),
  },
}));

export const ToolbarItem = styled("div")(({ theme }) => ({}));
