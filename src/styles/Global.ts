import { createGlobalStyle } from 'styled-components';
import { Hover } from 'styles/Hover';

export const Global = createGlobalStyle`
  html,
  body {
    font-family: 'Noto Sans TC', Arial, Helvetica, sans-serif;
    font-weight: 500;
  }

  a {
    &:link,
    &:visited,
    &:active {
      color: inherit;
    }

    ${Hover`
      transition: all ease-in-out 0.1s;
    `}
  }
`;
