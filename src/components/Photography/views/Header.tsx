import React from 'react';
import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';

import { LanguageSchema } from 'localization';

const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: 100px auto 250px;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    writing-mode: vertical-lr;
    font-size: 9.375rem;
    font-weight: 700;
    margin-right: 50px;
  }

  img {
    position: relative;
    bottom: -150px;
    max-width: 950px;
    width: 100%;
  }

  ${Responsive.tablet`
    margin: 70px auto 200px;
    h1 {
      font-size: 7rem;
      margin-right: 20px;
    }
  `}

  ${Responsive.mobile`
    margin: 50px auto 190px;
    h1 {
      font-size: 4.5rem;
      margin-right: 10px;;
    }
  `}
`;

const Title = styled.h1``;

export const Header: React.FC<LanguageSchema> = ({ content }) => {
  const { title } = content.photography;
  return (
    <Container>
      <Title>{title}</Title>
      <picture>
        <source
          srcSet={require('../assets/self-camera.jpg?webp')}
          type='image/webp'
        />
        <source
          srcSet={require('../assets/self-camera.jpg')}
          type='image/jpeg'
        />
        <img src={require('../assets/self-camera.jpg')} />
      </picture>
    </Container>
  );
};
