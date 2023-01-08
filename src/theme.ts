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
});

export const MOBILE_WIDTH = 376;
export const DESKTOP_WIDTH = 1441;

export default theme;
