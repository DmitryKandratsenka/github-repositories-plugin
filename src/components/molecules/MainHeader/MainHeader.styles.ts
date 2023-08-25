import { styled } from "@mui/material";

export const MainHeaderContainer = styled("header")(({ theme }) => ({
  alignItems: "center",
  background: theme.palette.background.default,
  display: "flex",
  height: 40,
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(8),
  paddingRight: theme.spacing(8),
  paddingTop: theme.spacing(3),
}));
