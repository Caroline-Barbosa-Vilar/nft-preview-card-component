import { createGlobalStyle } from 'styled-components';
import { darkBlue, fontFamily } from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  ul, li {
    list-style: none;
  }
  body {
    background-color: ${darkBlue};
    font-family: ${fontFamily};
  }
`