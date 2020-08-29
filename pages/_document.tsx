import React from 'react';
import Document, { DocumentContext, Head, Main, NextScript, Html } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element;
    html: string;
    head?: JSX.Element[];
  }> {
    /**
     * Server side styled-components setup
     * Ref: https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
     */
    
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render():JSX.Element {
    return (
      <Html>
        <Head>
          {/**
           * Loads google fonts locally
           * Reference: https://codeconqueror.com/blog/using-google-fonts-with-next-js
           */}
          <link
            rel="preload"
            href="/fonts/NotoSansTC-Thin.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NotoSansTC-Medium.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NotoSansTC-Bold.woff"
            as="font"
            crossOrigin=""
          />
          {/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;500;700&display=swap" rel="stylesheet"></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
