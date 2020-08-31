import React from 'react';
import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';
import { Color } from 'styles/Color';

const Container = styled.div`
  color: ${Color.WHITE};
  line-height: 1.88;
  margin-bottom: 120px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }

  p {
    font-size: 1rem;
    font-weight: 100;
  }

  ${Responsive.mobile`
    margin-bottom: 80px;

    h2 {
      font-size: 1.3rem;
    }
    p {
      line-height: 2;
    }
  `}
`;

interface QAItemProps {
  question: string;
  answer: string;
}

export const QAItem: React.FC<QAItemProps> = ({ question, answer }) => {
  return (
    <Container>
      <h2>{question}</h2>
      <p>{answer}</p>
    </Container>
  );
};
