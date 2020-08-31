/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { css } from 'styled-components';

export function Hover(...args: any) {
  return css`
    @media (min-width: 1024px) {
      &:hover:not(:disabled) {
        ${css(...args)}
      }
    }
  `;
}
