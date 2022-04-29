import { createGetInitialProps } from '@mantine/next';
import { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps(); // Mantine UI

const MyDocument = () => {
  return (
    <Html lang='ja'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = getInitialProps;

export default MyDocument;
