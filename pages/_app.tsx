import React from 'react';
import type { AppProps } from 'next/app';

import { Global } from 'styles/Global';
import { Reset } from 'styles/Reset';
import { Font } from 'styles/Font'; 

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Reset />
      <Font />
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
