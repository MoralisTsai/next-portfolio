import React from 'react';
import styled from 'styled-components';

import { LanguageSchema } from 'localization';

import { Color } from 'styles/Color';

import { Header } from './views/Header';
import { Resonance } from './views/Resonance';
import { VisionII } from './views/VisionII';
import { More } from './views/More';

const Main = styled.main`
  background-color: ${Color.TUNDORA};
`;

export const Film: React.FC<LanguageSchema> = ({ content }) => {
  return (
    <>
      <Header content={content} />
      <Main>
        <Resonance content={content} />
        <VisionII content={content} />
        <More content={content} />
      </Main>
    </>
  );
};
