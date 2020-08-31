import React from 'react';
import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';

import { LanguageSchema } from 'localization';

import { Header } from './views/Header';

const Container = styled.div`
  margin: auto;
  padding: 0 30px;
  margin-bottom: 130px;

  ${Responsive.mobile`
    padding: 0 20px;
    margin-bottom: 100px;
  `}
`;

export const About: React.FC<LanguageSchema> = ({ content }) => {
  return (
    <Container>
      <Header content={content} />
    </Container>
  );
};
