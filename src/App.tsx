
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { css } from '../styled-system/css'
import { atom, useAtom } from 'jotai';
import { GlobalStyle } from './styles/global';

const countAtom = atom(0);

export function App() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    <div>
      <p>Count: {count}</p>
      <button className={css({ fontSize: "2xl", fontWeight: 'bold' })}
       onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button
      className={css({ fontSize: "2xl", fontWeight: 'bold' })}
      onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
    </ThemeProvider>
  );
}
