import React from 'react';
import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';

import { LanguageSchema } from 'localization';

import {
  CardWrapper,
  CardBasicData,
  CardTechStack,
} from '../styles/ArticleCard';

import { ScreenshotsWrapper, ScreenshotsRow } from '../styles/Screenshots';

const CCardWrapper = styled(CardWrapper)`
  h2 {
    font-size: 6.25rem;
  }

  ${Responsive.tablet`
    h2 {
      font-size: 3rem;
    }
  `}

  ${Responsive.mobile`    
    h2 {
      font-size: 1.6rem;
    }

    p {
      line-height: 2;
    }
  `}
`;

const FogstandCover = styled.section`
  display: flex;
  width: 100%;
`;

const FogstandFigure = styled.picture`
  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    position: relative;
    left: -150px;
  }

  ${Responsive.laptop`
    margin-bottom: 40px;
    img {
      left: initial;
    }
  `}

  ${Responsive.mobile`
    margin-bottom: 30px;
  `}
`;

const FAArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > article {
    position: relative;
    left: -135px;
    top: -108px;

    h2 {
      line-height: 1.4;
    }
  }

  ${Responsive.laptop`
    > article {
      left: initial;
      top: initial;
    }
  `}
`;

const CScreenshotsWrapper = styled(ScreenshotsWrapper)`
  margin-top: 0;
`;

export const Fogstand: React.FC<LanguageSchema> = ({ content }) => {
  const { name, items } = content.coding;

  const [, fogstand] = items;

  return (
    <>
      <FogstandCover>
        <FogstandFigure>
          <source
            srcSet={require('../assets/fogstand1.jpg?webp')}
            type='image/webp'
          />
          <source
            srcSet={require('../assets/fogstand1.jpg')}
            type='image/jpeg'
          />
          <img src={require('../assets/fogstand1.jpg')} />
        </FogstandFigure>
      </FogstandCover>
      <FAArticleWrapper>
        <CCardWrapper>
          <mark>{name}</mark>
          <h2>{fogstand.title}</h2>
          <CardBasicData>
            <dt>Year</dt>
            <dd>2017</dd>
            <dt>Official Website</dt>
            <dd>
              <a
                href='https://fogstand-gravity.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://fogstand-gravity.herokuapp.com/
              </a>
            </dd>
            <dt>Application Link</dt>
            <dd>
              <a
                href='https://github.com/MoralisTsai/fogstand-gravity'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://github.com/MoralisTsai/fogstand-gravity
              </a>
            </dd>
          </CardBasicData>
          <p>{fogstand.description}</p>
          <div>
            {fogstand.tech.map((current, index) => (
              <CardTechStack key={index.toString()}>
                <dt>{current.title}</dt>
                <dd>{current.description}</dd>
              </CardTechStack>
            ))}
          </div>
        </CCardWrapper>
      </FAArticleWrapper>
      <CScreenshotsWrapper>
        <ScreenshotsRow>
          <picture>
            <source
              srcSet={require('../assets/fogstand2.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/fogstand2.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/fogstand2.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/fogstand3.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/fogstand3.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/fogstand3.jpg')} />
          </picture>
        </ScreenshotsRow>
        <ScreenshotsRow>
          <picture>
            <source
              srcSet={require('../assets/fogstand4.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/fogstand4.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/fogstand4.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/fogstand5.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/fogstand5.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/fogstand5.jpg')} />
          </picture>
        </ScreenshotsRow>
        <ScreenshotsRow>
          <picture>
            <source
              srcSet={require('../assets/fogstand6.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/fogstand6.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/fogstand6.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/fogstand7.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/fogstand7.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/fogstand7.jpg')} />
          </picture>
        </ScreenshotsRow>
      </CScreenshotsWrapper>
    </>
  );
};
