import 'assets/styles/globals.css';
import 'assets/fonts/stylesheet.css';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import client from 'apollo/client';
import Header from 'components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
