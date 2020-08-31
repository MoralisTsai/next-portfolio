import React from 'react';
import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';
import { Color } from 'styles/Color';

import { LanguageSchema } from 'localization';

import { QAItem } from './views/QAItem';

const Container = styled.div`
  background-color: ${Color.MINE_SHAFT};
  padding: 100px;

  ${Responsive.laptop`
    padding: 100px 70px;
  `}

  ${Responsive.tablet`
    padding: 80px 50px;
  `}

  ${Responsive.mobile`
    padding: 50px 20px;
  `}
`;

const Wrapper = styled.section`
  max-width: 1280px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 10rem;
  color: ${Color.WHITE};
  writing-mode: vertical-lr;

  ${Responsive.laptop`
    line-height: 1.8;
    writing-mode: initial;
    font-size: 5rem;
    margin-bottom: 100px;
  `}
`;

const QAWrapper = styled.div`
  margin: auto;
  max-width: 550px;
  width: 100%;
`;

export const ChitChat: React.FC<LanguageSchema> = ({ content }) => {
  const { title, items } = content.chitChat;
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
      </Wrapper>
      <QAWrapper>
        {items.map((current, index) => (
          <QAItem key={index.toString()} {...current} />
        ))}
      </QAWrapper>
    </Container>
  );
};
