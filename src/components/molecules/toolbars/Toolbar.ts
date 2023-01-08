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

export const ToolbarItem = styled("div")(({ theme }) => ({}));
