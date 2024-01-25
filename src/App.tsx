import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Transactions } from './pages/Transactions';
import { Provider } from 'jotai'

export function App() {
  return (
    <Provider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Transactions />
      </ThemeProvider>
    </Provider>
  );
}