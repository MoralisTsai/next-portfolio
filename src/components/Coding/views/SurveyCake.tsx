import React from 'react';

import {
  CardWrapper,
  CardBasicData,
  CardTechStack,
} from '../styles/ArticleCard';
import { ScreenshotsWrapper, ScreenshotsRow } from '../styles/Screenshots';
import { TwoSide, Figure, FigureWrapper } from '../styles/PrimaryWrapper';

import { SurveyCakeProps } from '../ts/SurveyCake';

export const SurveyCake: React.FC<SurveyCakeProps> = ({ content, language }) => {
  const { name, items } = content.coding;
  const [surveyCake] = items;

  const surveyCakeLangMap = {
    officialWebsite: {
      'en': 'en',
      'zh': 'zh-tw'
    },
    application: {
      'en': 'en',
      'zh': 'tw'
    }
  }

  const officialUrl = `https://www.surveyCake.com/${surveyCakeLangMap.officialWebsite[language]}`;
  const applicationUrl = `https://www.surveycake.com/admin/${surveyCakeLangMap.application[language]}/`

  return (
    <>
      <TwoSide>
        <FigureWrapper className="css-side-item">
          <Figure>
            <source
              srcSet={require('../assets/survey1.jpg?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../assets/survey1.jpg')}
              type="image/jpeg"
            />
            <img src={require('../assets/survey1.jpg')} />
          </Figure>
        </FigureWrapper>
        <CardWrapper className="css-side-item">
          <mark>{name}</mark>
          <h2>{surveyCake.title}</h2>
          <CardBasicData>
            <dt>Year</dt>
            <dd>2021</dd>
            <dt>Official Website</dt>
            <dd>
              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {officialUrl}
              </a>
            </dd>
            <dt>Application Link</dt>
            <dd>
              <a
                href={applicationUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                {applicationUrl}
              </a>
            </dd>
          </CardBasicData>
          <p>{surveyCake.description}</p>
          <div>
            {surveyCake.tech.map((current, index) => (
              <CardTechStack key={index.toString()}>
                <dt>{current.title}</dt>
                <dd>{current.description}</dd>
              </CardTechStack>
            ))}
          </div>
        </CardWrapper>
      </TwoSide>
      <ScreenshotsWrapper>
        <ScreenshotsRow>
          <picture>
            <source
              srcSet={require('../assets/survey2.jpg?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../assets/survey2.jpg')}
              type="image/jpeg"
            />
            <img src={require('../assets/survey2.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/survey3.jpg?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../assets/survey3.jpg')}
              type="image/jpeg"
            />
            <img src={require('../assets/survey3.jpg')} />
          </picture>
        </ScreenshotsRow>
        <ScreenshotsRow>
          <picture>
            <source
              srcSet={require('../assets/survey4.jpg?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../assets/survey4.jpg')}
              type="image/jpeg"
            />
            <img src={require('../assets/survey4.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/survey5.jpg?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../assets/survey5.jpg')}
              type="image/jpeg"
            />
            <img src={require('../assets/survey5.jpg')} />
          </picture>
        </ScreenshotsRow>
        <ScreenshotsRow>
          <picture>
            <source
              srcSet={require('../assets/survey6.jpg?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../assets/survey6.jpg')}
              type="image/jpeg"
            />
            <img src={require('../assets/survey6.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/survey7.jpg?webp')}
              type="image/webp"
            />
            <source
              srcSet={require('../assets/survey7.jpg')}
              type="image/jpeg"
            />
            <img src={require('../assets/survey7.jpg')} />
          </picture>
        </ScreenshotsRow>
      </ScreenshotsWrapper>
    </>
  );
};
