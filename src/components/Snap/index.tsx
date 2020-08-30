import React from 'react';
import styled from 'styled-components';

import { LanguageSchema } from 'localization';

import { Header } from './views/Header';
import { Main } from './views/Main';

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 200px auto;
`;

export const Snap: React.FC<LanguageSchema> = ({ content }) => {
  return (
    <Container>
      <Header content={content} />
      <Main content={content} />
    </Container>
  );
};
