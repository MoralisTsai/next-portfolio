import React from 'react';

import { LanguageSchema } from 'localization';

import {
  CardWrapper,
  CardBasicData,
  CardTechStack,
} from '../styles/ArticleCard';
import { ScreenshotsWrapper, ScreenshotsRow } from '../styles/Screenshots';
import { TwoSide, FigureWrapper, Figure } from '../styles/PrimaryWrapper';

export const SparkAmplify: React.FC<LanguageSchema> = ({ content }) => {
  const { name, items } = content.coding;
  const sparkAmplify = items[1];

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
        <FigureWrapper className='css-side-item'>
          <Figure>
            <source
              srcSet={require('../assets/spark1.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/spark1.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/spark1.jpg')} />
          </Figure>
        </FigureWrapper>
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
