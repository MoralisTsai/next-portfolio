import React from 'react';
import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';

import { LanguageSchema } from 'localization';

import { Header } from './views/Header';
import { Main } from './views/Main';

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 200px auto;

  ${Responsive.laptop`
    margin: 100px auto;
  `}

  ${Responsive.tablet`
    margin: 50px auto 100px;
  `}
`;

export const Snap: React.FC<LanguageSchema> = ({ content }) => {
  return (
    <Container>
      <Header content={content} />
      <Main content={content} />
    </Container>
  );
};
