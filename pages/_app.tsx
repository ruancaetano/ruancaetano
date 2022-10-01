import "../styles/globals.css";

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

      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
