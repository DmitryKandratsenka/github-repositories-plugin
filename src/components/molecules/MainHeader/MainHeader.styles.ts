import { styled } from "@mui/material";

export const MainHeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  height: 40,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(8),
  paddingRight: theme.spacing(8),
  alignItems: "center",
  background: theme.palette.background.default,
}));
