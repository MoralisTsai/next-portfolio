import React from "react";
import type { AppProps } from "next/app";

import { Global } from "styles/Global";
import { Reset } from "styles/Reset";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Reset />
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
