import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Responsive } from 'styles/Responsive';
import { Color } from 'styles/Color';

interface ContainerProps {
  light?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${(props: ContainerProps) =>
    props.light ? rgba(Color.MINE_SHAFT, 0.5) : Color.TUNDORA};
  line-height: 1.94;
  margin-bottom: 165px;

  section:nth-child(1) {
    margin-bottom: 40px;
  }

  section:nth-child(2) {
    margin-bottom: 20px;
  }

  p {
    font-weight: 700;
  }

  ul {
    padding-left: 20px;
  }

  li {
    list-style: circle;
  }

  ${Responsive.tablet`
    padding: 0 50px;
    margin-bottom: 120px;

    section:nth-child(1) {
      margin-bottom: 40px;
    }

    section:nth-child(2) {
      margin-bottom: 10px;
    }
  `}

  ${Responsive.mobile`
    padding: 0 20px;
    margin-bottom: 100px;

    p {
      line-height: 2;
    }
  `}
`;

interface JobProps {
  data: {
    title: string;
    company: string;
    period: string;
    description: string;
    jobs: string[];
  };
  light?: boolean;
}

export const BasicExperience: React.FC<JobProps> = ({ data, light }) => {
  const { title, company, period, description, jobs } = data;
  return (
    <Container light={light}>
      <section>
        <p>{title}</p>
        <p>{company}</p>
        <p>{period}</p>
      </section>
      <section>
        <p>{description}</p>
      </section>
      <ul>
        {jobs.map((current, index) => (
          <li key={index.toString()}>{current}</li>
        ))}
      </ul>
    </Container>
  );
};
