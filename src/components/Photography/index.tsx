import React from 'react';

import { LanguageSchema } from 'localization';

import { Header } from './views/Header';
import { Main } from './views/Main';

export const Photography: React.FC<LanguageSchema> = ({ content }) => {
  return (
    <>
      <Header content={content} />
      <Main content={content} />
    </>
  );
};
