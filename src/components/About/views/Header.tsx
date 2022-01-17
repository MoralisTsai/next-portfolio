import React from 'react';
import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';
import { Color } from 'styles/Color';

import { LanguageSchema } from 'localization';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${Color.MINE_SHAFT};
  font-size: 3.125rem;
  font-weight: 700;
  margin-bottom: 200px;
  text-align: center;
  margin-bottom: 100px;

  ${Responsive.mobile`
    margin-bottom: 50px;
  `}
`;

const Avatar = styled.picture`
  margin-bottom: 50px;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  max-width: 350px;
  width: 100%;
  p {
    color: ${Color.MINE_SHAFT};
    font-size: 1.125rem;
    line-height: 1.67;
    text-align: center;
    margin-bottom: 30px;
  }

  ${Responsive.mobile`
    p {
      font-size: 1rem;
      margin-bottom: 20px;
    }
  `}
`;

const DownloadResume = styled.a`
  text-decoration: underline;

  &:hover {
    color: ${Color.TUNDORA};
  }
`;

export const Header: React.FC<LanguageSchema> = ({ content }) => {
  const { title, basic, resume } = content.about;
  return (
    <Container>
      <Title>{title}</Title>
      <Avatar>
        <source
          srcSet={require('../assets/avatar.jpg?webp')}
          type='image/webp'
        />
        <source srcSet={require('../assets/avatar.jpg')} type='image/jpeg' />
        <img src={require('../assets/avatar.jpg')} />
      </Avatar>
      <Info>
        <p>{basic.name}</p>
        <p>{basic.email}</p>
        <p>{basic.bachelor}</p>
        <p>{basic.master}</p>
      </Info>
      <DownloadResume href="https://drive.google.com/file/d/1gMWUSD1oPxLZ068B5wcCnXPZ0H_qmUOx/view" target="_blank" rel='noopener noreferrer'>
        {resume}
      </DownloadResume>
    </Container>
  );
};
