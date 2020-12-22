import { AppProps } from 'next/app';
import { I18nProvider } from 'next-rosetta';
import { CSSProp, ThemeProvider } from 'styled-components';
import defaultTheme from '../common/themes/default';
import GlobalStyle from '../common/global.style';
import Head from 'next/head';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <I18nProvider table={pageProps.table}>
        <GlobalStyle />
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default MyApp;
