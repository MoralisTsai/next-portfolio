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

export const Resonance: React.FC<LanguageSchema> = ({ content }) => {
  const { play, items } = content.film;
  const [data] = items;

  const [
    cast,
    director,
    cinematographer,
    artDirector,
    screenwriter,
  ] = data.crew;
  return (
    <>
      <Banner
        src={require('../assets/resonance1.jpg')}
        title={data.title}
        award={data.award}
      />
      <InnerContent>
        <CrewRotate>
          <CrewWrapper>
            <time>03:00 ｜2014</time>
            <CrewColumn>
              <CrewList>
                <CrewMapping crew={cast} />
                <CrewMapping crew={director} />
                <CrewMapping crew={cinematographer} />
              </CrewList>
              <CrewList>
                <CrewMapping crew={artDirector} />
                <CrewMapping crew={screenwriter} />
              </CrewList>
            </CrewColumn>
          </CrewWrapper>
        </CrewRotate>
        <Information>
          <Description>{data.description}</Description>
          <Play
            href='https://vimeo.com/452997678'
            rel='noreferrer noopener'
            target='_blank'
          >
            {play}
          </Play>
          <ScreenContainer>
            <FirstImageRow>
              <ScreenImage>
                <source
                  srcSet={require('../assets/resonance2.jpg?webp')}
                  type='image/webp'
                />
                <source
                  srcSet={require('../assets/resonance2.jpg')}
                  type='image/jpeg'
                />
                <img src={require('../assets/resonance2.jpg')} />
              </ScreenImage>
              <ScreenImage>
                <source
                  srcSet={require('../assets/resonance3.jpg?webp')}
                  type='image/webp'
                />
                <source
                  srcSet={require('../assets/resonance3.jpg')}
                  type='image/jpeg'
                />
                <img src={require('../assets/resonance3.jpg')} />
              </ScreenImage>
            </FirstImageRow>
            <SecondImageRow>
              <ScreenImage>
                <source
                  srcSet={require('../assets/resonance4.jpg?webp')}
                  type='image/webp'
                />
                <source
                  srcSet={require('../assets/resonance4.jpg')}
                  type='image/jpeg'
                />
                <img src={require('../assets/resonance4.jpg')} />
              </ScreenImage>
            </SecondImageRow>
          </ScreenContainer>
        </Information>
      </InnerContent>
    </>
  );
};
