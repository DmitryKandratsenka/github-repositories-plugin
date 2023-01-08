import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { HomePage } from "@/components/pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
