import React from 'react';
import styled from 'styled-components';

import { LanguageSchema } from 'localization';

import { Header } from './views/Header';

const Container = styled.div`
  margin: auto;
  padding: 0 30px;
  margin-bottom: 130px;
`;

export const About: React.FC<LanguageSchema> = ({ content }) => {
  return (
    <Container>
      <Header content={content} />
    </Container>
  );
};
