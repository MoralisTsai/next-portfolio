import styled from 'styled-components';
import { rgba } from 'polished';

import { Color } from 'styles/Color';

export const CardWrapper = styled.article`
  line-height: 1.6;
  max-width: 550px;
  width: 100%;

  mark {
    background-color: ${Color.MINE_SHAFT};
    padding: 2px 18px;
    color: ${Color.WHITE};
    margin-bottom: 35px;
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: ${Color.TUNDORA};
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 45px;
  }
`;

export const CardBasicData = styled.dl`
  color: ${Color.TUNDORA};
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 45px;

  dt {
    display: none;
  }

  dd {
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }

    a:hover {
      color: ${rgba(Color.MINE_SHAFT, 0.5)};
    }
  }
`;

export const CardTechStack = styled.dl`
  margin-bottom: 24px;

  dt {
    color: ${Color.TUNDORA};
    font-weight: 100;
    font-size: 0.875rem;
  }

  dd {
    font-weight: 500;
    color: ${Color.TUNDORA};
    font-size: 1rem;
  }
`;
