import React from 'react';
import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';
import { Color } from 'styles/Color';

import { LanguageSchema } from 'localization';

const Title = styled.h1`
  color: ${Color.TUNDORA};
  font-size: 9.375rem;
  font-weight: 700;
  margin-bottom: 200px;
  text-align: center;

  ${Responsive.laptop`
    font-size: 8rem;
    margin-bottom: 100px;
  `}

  ${Responsive.tablet`
    font-size: 6rem;
  `}

  ${Responsive.tablet`
    font-size: 4rem;
    margin-bottom: 50px;
  `}
`;

export const Header: React.FC<LanguageSchema> = ({ content }) => {
  const { title } = content.snapSeries;
  return <Title>{title}</Title>;
};
