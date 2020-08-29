import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles/Color';

import { ImageLoader } from 'components/Shared/ImageLoader';

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

  > section {
    flex: 1 1 50%;
  }
`;

const Main = styled.section`
  padding: 70px 20px;
  font-size: 1.5rem;
`;

const MainInner = styled.div`
  margin: auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  font-weight: 700;
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
    font-weight: 400;
  }
`;

const InnerText = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const Figure = styled.section`
  width: 100%;
  height: 100%;
`;

const FigureImage = (src: string, style: React.CSSProperties) => {
  const localStyle = Object.assign(style, {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
  });

  return <div style={localStyle} />;
};

export const Cover: React.FC<unknown> = () => {
  return (
    <Container>
      <Main>
        <MainInner>
          <TextualLogo>M</TextualLogo>
          <h3>ㄋㄧˇ ㄏㄠˇ</h3>
          <Introduction>
            <h4>我是</h4>
            <mark>Moralis</mark>
          </Introduction>
          <InnerText>
            來台已有八年的印尼人。個性內向，但同時喜歡投入人群，曾參與多次國際志工活動。我擅長將複雜的問題拆解，分析並逐一處理至底。我常反思如何從被動的使用者，成為締造潮流的開發者，因此，逐漸走入程式這條路，期待因為自己設計，給予受眾更不一樣的體驗。目前在一家大數據媒體公司擔任軟體工程師，已有三年軟體開發經驗。
          </InnerText>
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
  );
};
