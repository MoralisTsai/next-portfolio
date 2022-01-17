import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';

export const TwoSide = styled.section`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  .css-side-item {
    flex: 1 1 50%;
  }

  ${Responsive.laptop`
    flex-flow: column nowrap;
    align-items: flex-start;

    .css-side-item {
      flex: initial;
    }

    article:nth-child(1) {
      order: 2;
    }
  `}
`;

export const FigureWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 750px;

  ${Responsive.laptop`
    align-self: center;
    margin-bottom: 50px;
  `}
`;

export const Figure = styled.picture`
  img {
    max-width: 650px;
    width: 100%;
  }
`;