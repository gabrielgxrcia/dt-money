import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
  }

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 400 1rem Roboto, sans-serif;
  }
`
