import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  margin-bottom: 20px;
  display: block;

  dt {
    font-weight: 100;
    font-size: 0.75rem;
    margin-bottom: 5px;
  }

  dd {
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

interface CrewMappingProps {
  crew: {
    title: string;
    member: string[];
  };
}

export const CrewMapping: React.FC<CrewMappingProps> = ({ crew }) => (
  <Wrapper>
    <dt>{crew.title}</dt>
    {crew.member.map((current, index) => (
      <dd key={index.toString()}>{current}</dd>
    ))}
  </Wrapper>
);
