import { styled } from "@mui/material";

export const MainContainer = styled("main")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
}));

export const ContentContainer = styled("section")(({ theme }) => ({
  boxShadow: `inset 0px 9px 10px -13px ${theme.palette.primary.main}`,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  marginLeft: 0,
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(5),
  },
}));
