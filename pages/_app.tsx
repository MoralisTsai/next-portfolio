import { AppProps } from "next/app";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import { globalStyles } from "styles/Reset";

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    {globalStyles}
    <Component {...pageProps} />
  </CacheProvider>
);

export default App;
