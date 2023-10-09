import 'assets/styles/globals.css';
import 'assets/fonts/stylesheet.css';
import Head from 'next/head';
import Header from 'components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
