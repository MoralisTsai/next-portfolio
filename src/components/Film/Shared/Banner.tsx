import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles/Color';

const Outer = styled.div`
  position: relative;
`;

interface InnerProps {
  src: string;
}

const Inner = styled.div`
  background-image: ${(props: InnerProps) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 650px;
  position: relative;
  filter: blur(2px);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Color.TUNDORA};
    opacity: 0.4;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Color.WHITE};
  line-height: 1.5;
  text-align: center;
`;

const Nomination = styled.article`
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 120px;
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.5rem;
    max-width: 60px;
  }
`;

const FilmName = styled.h1`
  font-size: 3.125rem;
  color: ${Color.WHITE};
  font-weight: 700;
`;

interface BannerProps {
  src: string;
  award: string;
  title: string;
}

export const Banner: React.FC<BannerProps> = ({ src, award, title }) => {
  return (
    <Outer>
      <Inner src={src} />
      <Content>
        <Nomination>
          <img
            src={require('../assets/grass-nominate.svg')}
            alt='nominate-grass'
          />
          <h3>{award}</h3>
        </Nomination>
        <FilmName>{title}</FilmName>
      </Content>
    </Outer>
  );
};
