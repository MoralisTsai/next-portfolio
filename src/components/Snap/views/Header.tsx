import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles/Color';

import { LanguageSchema } from 'localization';

const Title = styled.h1`
  color: ${Color.TUNDORA};
  font-size: 9.375rem;
  font-weight: 700;
  margin-bottom: 200px;
  text-align: center;
`;

export const Header: React.FC<LanguageSchema> = ({ content }) => {
  const { title } = content.snapSeries;
  return <Title>{title}</Title>;
};
