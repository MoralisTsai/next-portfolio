import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles/Color';
import { Responsive } from 'styles/Responsive';

import { LanguageSchema } from 'localization';

const Wrapper = styled.section`
  margin: 50px auto 100px;
  line-height: 1.5;
  font-weight: 700;

  ${Responsive.laptop`
    margin: 0 auto 60px;
  `}
`;

interface FluidProps {
  src: string;
}

const Fluid = styled.div`
  background-image: ${(props: FluidProps) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: auto;
  max-width: 500px;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  position: relative;

  ${Responsive.tablet`
    max-width: 400px;
    height: 400px;
  `}

  ${Responsive.mobile`
    max-width: 280px;
    height: 280px;
  `}
`;

const InnerFluid = styled.article`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h2 {
    color: ${Color.MINE_SHAFT};
    font-size: 6.25rem;
    opacity: 0.05;
    transform: scale(-1, 1);
  }

  h3 {
    font-size: 1rem;
    color: ${Color.TUNDORA};
    opacity: 0.69;
  }

  ${Responsive.tablet`
    h2 {
      font-size: 5rem;
    }
  `}

  ${Responsive.mobile`
    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 0.875rem;
    }
  `}
`;

export const Header: React.FC<LanguageSchema> = ({ content }) => {
  const { title, subtitle } = content.film;
  return (
    <Wrapper>
      <Fluid src={require('../assets/fluid.svg')}>
        <InnerFluid>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </InnerFluid>
      </Fluid>
    </Wrapper>
  );
};
