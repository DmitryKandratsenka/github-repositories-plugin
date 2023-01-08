import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { HomePage } from "@/components/pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { CountryContextProvider } from "@/contexts";

const client = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <CountryContextProvider>
          <HomePage />
        </CountryContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
