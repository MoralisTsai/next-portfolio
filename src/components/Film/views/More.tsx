import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Hover } from 'styles/Hover';
import { Responsive } from 'styles/Responsive';

import { LanguageSchema } from 'localization';

import { Color } from 'styles/Color';

const Wrapper = styled.div`
  max-width: 1280px;
  padding: 30px;
  margin: auto;
  color: ${Color.WHITE};
  line-height: 1.5;

  ${Responsive.mobile`
    padding: 0 20px;
  `}
`;

const Title = styled.h3`
  font-size: 6.25rem;
  font-weight: 700;
  margin-bottom: 80px;

  ${Responsive.tablet`
    font-size: 2.188rem;
    margin-bottom: 50px;
  `}

  ${Responsive.mobile`
    margin-bottom: 20px;
  `}
`;

const CardParent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  section {
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }

  ${Responsive.laptop`
    flex-flow: column nowrap;

    section {
      &:not(:last-of-type) {
        margin: 0;
        margin-bottom: 30px;
      }
    }
  `}
`;

const Card = styled.section`
  max-width: 400px;
  width: 100%;

  img {
    width: 100%;
    margin-bottom: 20px;
    height: 260px;
    object-fit: cover;
  }

  h2 {
    font-weight: 700;
    font-size: 1.875rem;
    margin-bottom: 8px;
  }

  time {
    font-size: 1rem;
    font-weight: 100;
    display: block;
    margin-bottom: 10px;
  }

  a {
    text-decoration: underline;
    color: ${Color.WHITE}!important;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 700;
    margin-bottom: 40px;
    display: inline-block;

    ${Hover`
      color: ${rgba(Color.WHITE, 0.5)}!important;
    `}
  }

  p {
    font-size: 1rem;
    line-height: 1.88;
  }

  ${Responsive.laptop`
    max-width: initial;

    img {
      height: initial;
    }
  `}

  ${Responsive.mobile`
    a {
      margin-bottom: 20px;
    }
    p {
      line-height: 2;
    }
  `}
`;

export const More: React.FC<LanguageSchema> = ({ content }) => {
  const { more, play } = content.film;
  const [hug, vision, satoyama] = more.items;
  return (
    <Wrapper>
      <Title>{more.title}</Title>
      <CardParent>
        <Card>
          <picture>
            <source
              srcSet={require('../assets/hug1.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/hug1.jpg')} type='image/jpeg' />
            <img src={require('../assets/hug1.jpg')} />
          </picture>
          <h2>{hug.title}</h2>
          <time>06:35 | 2013</time>
          <a
            href='https://vimeo.com/452999265'
            rel='noreferrer noopener'
            target='_blank'
          >
            {play}
          </a>
          <p>{hug.description}</p>
        </Card>
        <Card>
          <picture>
            <source
              srcSet={require('../assets/vision1.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/vision1.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/vision1.jpg')} />
          </picture>
          <h2>{vision.title}</h2>
          <time>01:41 | 2014</time>
          <a
            href='https://vimeo.com/452998832'
            rel='noreferrer noopener'
            target='_blank'
          >
            {play}
          </a>
          <p>{vision.description}</p>
        </Card>
        <Card>
          <picture>
            <source
              srcSet={require('../assets/satoyama1.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/satoyama1.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/satoyama1.jpg')} />
          </picture>
          <h2>{satoyama.title}</h2>
          <time>10:06 | 2015</time>
          <a
            href='https://vimeo.com/452999911'
            rel='noreferrer noopener'
            target='_blank'
          >
            {play}
          </a>
          <p>{satoyama.description}</p>
        </Card>
      </CardParent>
    </Wrapper>
  );
};
