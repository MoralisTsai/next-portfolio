import { createGlobalStyle } from 'styled-components';

export const Font = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Noto Sans TC Thin'), local('NotoSansTC-Thin'),
        url('/fonts/NotoSansTC-Thin.woff') format('woff'),
  }

  @font-face {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Noto Sans TC Medium'), local('NotoSansTC-Medium'),
        url('/fonts/NotoSansTC-Medium.woff') format('woff'),
  }

  @font-face {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Noto Sans TC Bold'), local('NotoSansTC-Bold'),
        url('/fonts/NotoSansTC-Bold.woff') format('woff'),
  }
`;
