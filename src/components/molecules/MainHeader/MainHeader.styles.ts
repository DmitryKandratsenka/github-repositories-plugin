import { styled } from "@mui/material";

export const MainHeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  height: 40,
  padding: theme.spacing(3),
  alignItems: "center",
  background: theme.palette.background.default,
}));
