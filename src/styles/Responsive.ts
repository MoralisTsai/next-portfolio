/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { css } from 'styled-components';

export const Responsive = {
  mobile: (...args) => css`
    @media (max-width: 500px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  laptop: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)}
    }
  `,
};
