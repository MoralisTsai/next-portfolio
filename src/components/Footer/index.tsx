import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Color } from 'styles/Color';

import { LanguageSchema } from 'localization';

const Wrapper = styled.footer`
  background-color: ${Color.MINE_SHAFT};
  line-height: 1.88;
  color: ${Color.WHITE};
  font-weight: 100;
  font-size: 0.85rem;
  text-align: center;
  padding: 40px 20px;

  small {
    display: block;
  }

  a:hover {
    color: ${rgba(Color.WHITE, 0.5)};
  }
`;

export const Footer: React.FC<LanguageSchema> = ({ content }) => {
  return (
    <Wrapper>
      <small>Copyright © 2022 Moralis. All Rights Reserved</small>
      <a
        href='https://github.com/MoralisTsai/next-portfolio'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://github.com/MoralisTsai/next-portfolio/
      </a>
    </Wrapper>
  );
};
