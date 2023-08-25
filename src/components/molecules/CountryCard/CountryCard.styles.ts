import { Box, Card, styled, Typography } from "@mui/material";

export const CardWrapper = styled(Card)(({ theme }) => ({
  "&:hover": {
    top: "-20px",
  },
  background: theme.palette.background.default,
  borderRadius: 16,
  cursor: "pointer",
  height: 420,
  marginBottom: theme.spacing(5),
  maxWidth: 400,
  position: "relative",
  top: 0,
  transition: "top 1s ease-out 100ms",
  width: "100%",
}));

export const DescriptionItemContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  marginBottom: theme.spacing(1),
}));

export const SubTitleTypography = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}));
