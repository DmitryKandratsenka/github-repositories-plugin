import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { theme } from "./theme";
import { CountryDetailsPage, HomePage } from "@/components/pages";
import { CountryContextProvider } from "@/contexts";
import { AppRoute } from "@/enums/AppRoute";
import Redirect from "@/router/Redirect";

const client = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <HashRouter>
          <CountryContextProvider>
            <Routes>
              <Route element={<HomePage />} path={AppRoute.INDEX} />
              <Route
                element={<CountryDetailsPage />}
                path={`${AppRoute.COUNTRY_DETAILS}/:alpha3Code`}
              />
              <Route element={<Redirect to={AppRoute.INDEX} />} path="*" />
            </Routes>
          </CountryContextProvider>
        </HashRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
