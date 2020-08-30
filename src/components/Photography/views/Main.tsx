import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Color } from 'styles/Color';

import { LanguageSchema } from 'localization';

const UpperMeta = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  margin-bottom: 70px;
`;

const WorkMeta = styled.article`
  display: flex;
  flex-flow: column nowrap;
  line-height: 1.5;
  max-width: 350px;
  width: 100%;

  h2 {
    color: ${Color.MINE_SHAFT};
    font-size: 3.125rem;
    margin-bottom: 10px;
    font-weight: 700;
    align-self: flex-end;
  }

  time,
  address {
    font-size: 1rem;
    display: block;
    color: ${Color.TUNDORA};
    font-weight: 700;
    align-self: flex-end;
  }

  address {
    margin-bottom: 30px;
  }

  p {
    line-height: 1.88;
    font-size: 1rem;
    color: ${Color.TUNDORA};
  }
`;

const PhotosContainer = styled.div`
  background-color: ${rgba(Color.TUNDORA, 0.1)};
  padding: 100px;
`;

const PhotosInner = styled.div`
  max-width: 900px;
  width: 100%;
  margin: auto;
`;

const PhotoRow = styled.div`
  width: 100%;
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }

  picture {
    img {
      width: 100%;
    }

    &:not(:last-of-type) {
      margin-right: 50px;
    }
  }
`;

export const Main: React.FC<LanguageSchema> = ({ content }) => {
  const [barber] = content.photography.items;
  return (
    <>
      <UpperMeta>
        <WorkMeta>
          <h2>{barber.title}</h2>
          <time>2014</time>
          <address>{barber.place}</address>
          <p>{barber.description}</p>
        </WorkMeta>
      </UpperMeta>
      <PhotosContainer>
        <PhotosInner>
          <PhotoRow>
            <picture>
              <source
                srcSet={require('../assets/barber2.jpg?webp')}
                type='image/webp'
              />
              <source
                srcSet={require('../assets/barber2.jpg')}
                type='image/jpeg'
              />
              <img src={require('../assets/barber2.jpg')} />
            </picture>
            <picture>
              <source
                srcSet={require('../assets/barber3.jpg?webp')}
                type='image/webp'
              />
              <source
                srcSet={require('../assets/barber3.jpg')}
                type='image/jpeg'
              />
              <img src={require('../assets/barber3.jpg')} />
            </picture>
          </PhotoRow>
          <PhotoRow>
            <picture>
              <source
                srcSet={require('../assets/barber4.jpg?webp')}
                type='image/webp'
              />
              <source
                srcSet={require('../assets/barber4.jpg')}
                type='image/jpeg'
              />
              <img src={require('../assets/barber4.jpg')} />
            </picture>
            <picture>
              <source
                srcSet={require('../assets/barber5.jpg?webp')}
                type='image/webp'
              />
              <source
                srcSet={require('../assets/barber5.jpg')}
                type='image/jpeg'
              />
              <img src={require('../assets/barber5.jpg')} />
            </picture>
          </PhotoRow>
          <PhotoRow>
            <picture>
              <source
                srcSet={require('../assets/barber6.jpg?webp')}
                type='image/webp'
              />
              <source
                srcSet={require('../assets/barber6.jpg')}
                type='image/jpeg'
              />
              <img src={require('../assets/barber6.jpg')} />
            </picture>
            <picture>
              <source
                srcSet={require('../assets/barber7.jpg?webp')}
                type='image/webp'
              />
              <source
                srcSet={require('../assets/barber7.jpg')}
                type='image/jpeg'
              />
              <img src={require('../assets/barber7.jpg')} />
            </picture>
          </PhotoRow>
        </PhotosInner>
      </PhotosContainer>
    </>
  );
};
