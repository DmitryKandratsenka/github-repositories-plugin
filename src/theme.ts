import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "hsl(0, 0%, 98%)",
      main: "hsl(0, 0%, 52%)",
      dark: "hsl(200, 15%, 8%)",
    },
    background: {
      default: "hsl(0, 0%, 100%)",
    },
  },
  typography: {
    h6: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 14,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 16,
    },
    caption: {
      fontSize: 18,
      fontWeight: 600,
    },
  },
});

export const MOBILE_WIDTH = 376;
export const DESKTOP_WIDTH = 1441;

export default theme;
