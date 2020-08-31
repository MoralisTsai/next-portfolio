import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles/Color';
import { Responsive } from 'styles/Responsive';

import { LanguageSchema } from 'localization';

import { SparkAmplify } from './views/SparkAmplify';
import { Fogstand } from './views/Fogstand';

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  color: ${Color.MINE_SHAFT};
  overflow: hidden;
`;

const Wrapper = styled.section`
  margin-top: 120px;
  padding: 0 80px;

  ${Responsive.tablet`
    padding: 0 30px;
    margin-top: 80px;
  `}

  ${Responsive.mobile`
    padding: 0 20px;
    margin-top: 20px;
  `}
`;

const Header = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 130px;

  ${Responsive.laptop`
    margin-bottom: 20px;
  `}

  ${Responsive.mobile`
    font-size: 1.5rem;
  `}
`;

export const Coding: React.FC<LanguageSchema> = ({ content }) => {
  const { portfolio } = content;
  return (
    <Container>
      <Wrapper>
        <Header>{portfolio}</Header>
        <SparkAmplify content={content} />
        <Fogstand content={content} />
      </Wrapper>
    </Container>
  );
};
