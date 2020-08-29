import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  html,
  body {
    font-family: 'Noto Sans TC', Arial, Helvetica, sans-serif;
  }

  a {
    &:link,
    &:visited,
    &:active {
      color: inherit;
    }

    &:hover {
      transition: all ease-in-out 0.1s;
    }
  }
`;
