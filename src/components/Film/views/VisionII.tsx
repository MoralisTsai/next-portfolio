import React from 'react';

import { LanguageSchema } from 'localization';

import { Banner } from '../Shared/Banner';

import {
  InnerContent,
  Information,
  CrewWrapper,
  CrewColumn,
  CrewList,
  Description,
  Play,
  ScreenContainer,
  ScreenImage,
  CrewRotate,
  FirstImageRow,
  SecondImageRow,
} from '../styles/Content';

import { CrewMapping } from '../Shared/CrewMapping';

export const VisionII: React.FC<LanguageSchema> = ({ content }) => {
  const { play, items } = content.film;
  const [, data] = items;

  const [cast, director, cinematographer, artDirector] = data.crew;
  return (
    <>
      <Banner
        src={require('../assets/visionii1.jpg')}
        title={data.title}
        award={data.award}
      />
      <InnerContent>
        <Information>
          <Description>{data.description}</Description>
          <Play
            href='https://vimeo.com/452998152'
            rel='noreferrer noopener'
            target='_blank'
          >
            {play}
          </Play>
          <ScreenContainer>
            <FirstImageRow>
              <ScreenImage>
                <source
                  srcSet={require('../assets/visionii2.jpg?webp')}
                  type='image/webp'
                />
                <source
                  srcSet={require('../assets/visionii2.jpg')}
                  type='image/jpeg'
                />
                <img src={require('../assets/visionii2.jpg')} />
              </ScreenImage>
            </FirstImageRow>
            <SecondImageRow>
              <ScreenImage>
                <source
                  srcSet={require('../assets/visionii3.jpg?webp')}
                  type='image/webp'
                />
                <source
                  srcSet={require('../assets/visionii3.jpg')}
                  type='image/jpeg'
                />
                <img src={require('../assets/visionii3.jpg')} />
              </ScreenImage>
            </SecondImageRow>
          </ScreenContainer>
        </Information>
        <CrewRotate>
          <CrewWrapper>
            <time>05:06 ｜2015</time>
            <CrewColumn>
              <CrewList>
                <CrewMapping crew={cast} />
                <CrewMapping crew={director} />
              </CrewList>
              <CrewList>
                <CrewMapping crew={cinematographer} />
                <CrewMapping crew={artDirector} />
              </CrewList>
            </CrewColumn>
          </CrewWrapper>
        </CrewRotate>
      </InnerContent>
    </>
  );
};
