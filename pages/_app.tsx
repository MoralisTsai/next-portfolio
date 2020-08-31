import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Global } from 'styles/Global';
import { Reset } from 'styles/Reset';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Moralis | Personal Website</title>
      </Head>
      <Reset />
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
