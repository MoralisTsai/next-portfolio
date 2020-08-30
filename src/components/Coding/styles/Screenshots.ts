import styled from 'styled-components';
import { rgba } from 'polished';

import { Color } from 'styles/Color';

export const ScreenshotsWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 100px;
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
`;
