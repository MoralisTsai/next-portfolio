import React from 'react';
import styled from 'styled-components';

import { LanguageSchema } from 'localization';

import {
  CardWrapper,
  CardBasicData,
  CardTechStack,
} from '../styles/ArticleCard';

import { ScreenshotsWrapper, ScreenshotsRow } from '../styles/Screenshots';

const TwoSide = styled.section`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  .css-side-item {
    flex: 1 1 50%;
  }
`;

const MainPhoto = styled.div`
  width: 100%;
  height: 100%;
  max-width: 750px;
`;

const SparkFigure = styled.picture`
  img {
    max-width: 650px;
  }
`;

export const SparkAmplify: React.FC<LanguageSchema> = ({ content }) => {
  const { name, items } = content.coding;
  const [sparkAmplify] = items;

  return (
    <>
      <TwoSide>
        <CardWrapper className='css-side-item'>
          <mark>{name}</mark>
          <h2>{sparkAmplify.title}</h2>
          <CardBasicData>
            <dt>Year</dt>
            <dd>2020</dd>
            <dt>Official Website</dt>
            <dd>
              <a
                href='https://www.sparkamplify.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://www.sparkamplify.com
              </a>
            </dd>
            <dt>Application Link</dt>
            <dd>
              <a
                href='https://app.sparkamplify.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://app.sparkamplify.com
              </a>
            </dd>
          </CardBasicData>
          <p>{sparkAmplify.description}</p>
          <div>
            {sparkAmplify.tech.map((current, index) => (
              <CardTechStack key={index.toString()}>
                <dt>{current.title}</dt>
                <dd>{current.description}</dd>
              </CardTechStack>
            ))}
          </div>
        </CardWrapper>
        <MainPhoto className='css-side-item'>
          <SparkFigure>
            <source
              srcSet={require('../assets/spark1.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/spark1.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/spark1.jpg')} />
          </SparkFigure>
        </MainPhoto>
      </TwoSide>
      <ScreenshotsWrapper>
        <ScreenshotsRow>
          <picture>
            <source
              srcSet={require('../assets/spark2.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/spark2.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/spark2.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/spark3.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/spark3.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/spark3.jpg')} />
          </picture>
        </ScreenshotsRow>
        <ScreenshotsRow>
          <picture>
            <source
              srcSet={require('../assets/spark4.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/spark4.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/spark4.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/spark5.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/spark5.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/spark5.jpg')} />
          </picture>
        </ScreenshotsRow>
        <ScreenshotsRow>
          <picture>
            <source
              srcSet={require('../assets/spark6.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/spark6.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/spark6.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/spark7.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/spark7.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/spark7.jpg')} />
          </picture>
        </ScreenshotsRow>
      </ScreenshotsWrapper>
    </>
  );
};
