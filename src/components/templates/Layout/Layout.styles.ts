import { styled } from "@mui/material";
import { MOBILE_WIDTH } from "@/theme";

export const MainContainer = styled("main")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
}));

export const ContentContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  height: "100%",
  boxShadow: `inset 0px 9px 10px -13px ${theme.palette.primary.main}`,
  marginLeft: 0,
  [theme.breakpoints.up(MOBILE_WIDTH)]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));
