import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../src/components/Layout';
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>nob-sandbox</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <MantineProvider
      // withGlobalStyles
      // withNormalizeCSS
      // theme={{
      //   /** Put your mantine theme override here */
      //   colorScheme: 'light',
      // }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}

export default MyApp;
