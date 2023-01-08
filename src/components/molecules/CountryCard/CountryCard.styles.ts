import { Card, styled } from "@mui/material";

export const CardWrapper = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  background: theme.palette.background.default,
  height: 300,
  maxWidth: 600,
  borderRadius: 16,
}));
