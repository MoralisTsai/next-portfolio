import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Color } from 'styles/Color';

import { LanguageSchema } from 'localization';

const ImageContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const ImagesColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  &:not(:last-of-type) {
    margin-right: 40px;
  }

  picture {
    img {
      width: 100%;
      margin-bottom: 40px;
    }
  }

  &:nth-child(1) {
    padding-top: 50px;
  }

  &:nth-child(3) {
    padding-top: 100px;
  }
`;

const SeeMore = styled.a`
  font-size: 1.25rem;
  color: ${Color.TUNDORA}!important;
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
  display: block;
  font-weight: 100;

  &:hover {
    color: ${rgba(Color.TUNDORA, 0.3)}!important;
  }
`;

export const Main: React.FC<LanguageSchema> = ({ content }) => {
  const { more } = content.snapSeries;
  return (
    <>
      <ImageContainer>
        <ImagesColumn>
          <picture>
            <source
              srcSet={require('../assets/snap1.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/snap1.jpg')} type='image/jpeg' />
            <img src={require('../assets/snap1.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/snap5.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/snap5.jpg')} type='image/jpeg' />
            <img src={require('../assets/snap5.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/snap3.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/snap3.jpg')} type='image/jpeg' />
            <img src={require('../assets/snap3.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/snap8.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/snap8.jpg')} type='image/jpeg' />
            <img src={require('../assets/snap8.jpg')} />
          </picture>
        </ImagesColumn>
        <ImagesColumn>
          <picture>
            <source
              srcSet={require('../assets/snap6.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/snap6.jpg')} type='image/jpeg' />
            <img src={require('../assets/snap6.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/snap10.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/snap10.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/snap10.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/snap11.jpg?webp')}
              type='image/webp'
            />
            <source
              srcSet={require('../assets/snap11.jpg')}
              type='image/jpeg'
            />
            <img src={require('../assets/snap11.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/snap7.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/snap7.jpg')} type='image/jpeg' />
            <img src={require('../assets/snap7.jpg')} />
          </picture>
        </ImagesColumn>
        <ImagesColumn>
          <picture>
            <source
              srcSet={require('../assets/snap2.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/snap2.jpg')} type='image/jpeg' />
            <img src={require('../assets/snap2.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/snap4.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/snap4.jpg')} type='image/jpeg' />
            <img src={require('../assets/snap4.jpg')} />
          </picture>
          <picture>
            <source
              srcSet={require('../assets/snap9.jpg?webp')}
              type='image/webp'
            />
            <source srcSet={require('../assets/snap9.jpg')} type='image/jpeg' />
            <img src={require('../assets/snap9.jpg')} />
          </picture>
        </ImagesColumn>
      </ImageContainer>
      <SeeMore
        href='https://unsplash.com/@moralis'
        target='_blank'
        rel='noopener noreferrer'
      >
        {more}
      </SeeMore>
    </>
  );
};
