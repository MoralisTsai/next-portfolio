/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Color } from 'styles/Color';
import { Responsive } from 'styles/Responsive';
import { Hover } from 'styles/Hover';

import { ImageLoader } from 'components/Shared/ImageLoader';

import { CoverProps } from './ts/Cover';

const Container = styled.header`
  width: 100%;
  height: 100vh;
  background-color: ${Color.MINE_SHAFT};
  color: ${Color.WHITE};
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  overflow: hidden;
  line-height: 1.8;
  position: relative;

  > section {
    flex: 1 1 50%;
  }

  ${Responsive.laptop`
    font-size: 1.25rem;
    background-image: ${(props: MainProps) => `url(${props.src})`};
    background-size: cover;
    background-position: center;
  
    &:after {
      content: '';
      position: absolute;
      background-color: ${Color.TUNDORA};
      opacity: 0.85;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    > section {
      flex: 1 1 100%;
    }
  `}

  ${Responsive.mobile`
    background: initial;
    background-color: ${Color.MINE_SHAFT};

    &::after {
      display: none;
    }
  `}
`;

interface MainProps {
  src: string;
}

const Main = styled.section`
  padding: 70px 50px;
  font-size: 1.5rem;

  ${Responsive.laptop`
    align-self: flex-end;
    padding: 50px;
  `}

  ${Responsive.mobile`
    align-self: center;
    padding: 0;
  `}
`;

const MainInner = styled.div`
  margin: auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  font-weight: 700;
  z-index: 10;
  position: relative;

  ${Responsive.laptop`
    margin: initial;
  `}

  ${Responsive.mobile`
    align-items: center;
    justify-content: center;
    h3 {
      display: none;
    }
  `}
`;

const TextualLogo = styled.article`
  font-family: 'Permanent Marker', cursive;
  font-size: 6.25rem;
`;

const Introduction = styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;

  mark {
    font-family: 'Courier New', Courier, monospace;
    color: ${Color.MINE_SHAFT};
    background-color: ${Color.WHITE};
    padding: 2px 15px;
    line-height: 1.2;
    margin-left: 20px;
    font-weight: 500;
  }

  ${Responsive.mobile`
    display: none;
  `}
`;

const InnerText = styled.p`
  font-size: 1rem;
  font-weight: 500;

  ${Responsive.mobile`
    display: none;
  `}
`;

const Figure = styled.section`
  width: 100%;
  height: 100%;

  ${Responsive.laptop`
    display: none;
  `}
`;

const MobileContainer = styled.header`
  display: none;
  padding: 30px 20px;
  line-height: 1.6;

  h1 {
    font-weight: 700;
  }

  h1,
  h4 {
    font-size: 1.2rem;
    color: ${rgba(Color.TUNDORA, 0.3)};
  }

  mark {
    color: ${Color.TUNDORA};
    background-color: ${Color.WHITE};
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 30px;
    display: block;
  }

  p {
    line-height: 2;
    font-size: 0.938rem;
  }

  ${Responsive.mobile`
    display: block;
  `}
`;

const LanguageOption = styled.div`
  line-height: 1.3;
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
`;

interface LanguageItemProps {
  active: boolean;
}

const LanguageItem = styled.span`
  font-weight: ${(props: LanguageItemProps) => (props.active ? 700 : 100)};
  font-size: 0.825rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  color: ${(props: LanguageItemProps) =>
    props.active ? Color.WHITE : rgba(Color.WHITE, 0.6)};

  &:first-child {
    margin-right: 20px;
  }

  ${Hover`
    color: ${rgba(Color.WHITE, 0.4)};
  `}
`;

const FigureImage = (src: string, style: React.CSSProperties) => {
  const localStyle = Object.assign(style, {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
  });

  return <div style={localStyle} />;
};

export const Cover: React.FC<CoverProps> = ({
  content: { cover },
  changeLanguage,
  language,
}) => {
  return (
    <>
      <LanguageOption>
        <LanguageItem
          onClick={() => changeLanguage('en')}
          role='presentation'
          active={language === 'en'}
        >
          EN
        </LanguageItem>
        <LanguageItem
          onClick={() => changeLanguage('zh')}
          role='presentation'
          active={language === 'zh'}
        >
          繁
        </LanguageItem>
      </LanguageOption>
      {
        // @ts-ignore
        <Container src={require('./assets/self-portrait-small.jpg')}>
          <Main>
            <MainInner>
              <TextualLogo>M</TextualLogo>
              <h3>{cover.greeting}</h3>
              <Introduction>
                <h4>{cover.introduction}</h4>
                <mark>Moralis</mark>
              </Introduction>
              <InnerText>{cover.description}</InnerText>
            </MainInner>
          </Main>
          <Figure>
            <ImageLoader
              preview={require('./assets/self-portrait-small.jpg')}
              src={require('./assets/self-portrait.jpg')}
              render={FigureImage}
            />
          </Figure>
        </Container>
      }
      <MobileContainer>
        <h1>HELLO,</h1>
        <h4>{cover.introduction}</h4>
        <mark>MORALIS</mark>
        <p>{cover.description}</p>
      </MobileContainer>
    </>
  );
};
