import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from './theme';
import { HomePage } from '@/components/pages';
import { AppRoute } from '@/enums/AppRoute';
import Redirect from '@/router/Redirect';
import { store } from '@/redux/store';

const client = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <HashRouter>
          <Provider store={store}>
            <Routes>
              <Route element={<HomePage />} path={AppRoute.INDEX} />
              <Route element={<Redirect to={AppRoute.INDEX} />} path="*" />
            </Routes>
          </Provider>
        </HashRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
