import { Suspense } from "react";
import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@styles/themes/default.theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ruan Caetano</title>
      </Head>
      <Suspense fallback="loading">
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Suspense>
    </>
  );
}

export default appWithTranslation(App);
