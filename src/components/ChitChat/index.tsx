import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles/Color';

import { LanguageSchema } from 'localization';

import { QAItem } from './views/QAItem';

const Container = styled.div`
  background-color: ${Color.MINE_SHAFT};
  padding: 100px;
`;

const Wrapper = styled.section`
  max-width: 1280px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 12.5rem;
  color: ${Color.WHITE};
  writing-mode: vertical-lr;
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
