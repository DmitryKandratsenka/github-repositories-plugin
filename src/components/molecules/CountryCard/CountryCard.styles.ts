import { Box, Card, styled, Typography } from "@mui/material";

export const CardWrapper = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  background: theme.palette.background.default,
  height: 420,
  maxWidth: 400,
  borderRadius: 16,
  width: "100%",
  cursor: "pointer",
  position: "relative",
  top: 0,
  transition: "top 1s ease-out 100ms",
  "&:hover": {
    top: "-20px",
  },
}));

export const DescriptionItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: theme.spacing(1),
  alignItems: "center",
}));

export const SubTitleTypography = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}));
