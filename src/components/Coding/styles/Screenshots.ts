import styled from 'styled-components';
import { rgba } from 'polished';

import { Color } from 'styles/Color';
import { Responsive } from 'styles/Responsive';

export const ScreenshotsWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 100px;

  ${Responsive.tablet`
    margin-top: 30px;
    margin-bottom: 50px;
  `}
`;

export const ScreenshotsRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  picture {
    img {
      max-width: 700px;
      width: 100%;
      border: 1px solid ${rgba(Color.TUNDORA, 0.3)};
      margin-bottom: 35px;
    }
    &:not(:last-of-type) {
      margin-right: 35px;
    }
  }

  ${Responsive.tablet`
    picture {
      img {
        margin-bottom: 20px;
      }
      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  `}

  ${Responsive.mobile`
    flex-flow: column nowrap;

    picture {
      img {
        margin-bottom: 20px;
      }
      &:not(:last-of-type) {
        margin: 0;
      }
    }
  `}
`;
