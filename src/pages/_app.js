import 'assets/styles/globals.css';
import 'assets/fonts/stylesheet.css';
import "assets/styles/donnut.css";
import Head from 'next/head';
import Header from 'components/Header';
import BackgroundEffect from "components/BackgroundEffect";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Roboto+Mono&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BackgroundEffect key={router.route} />

      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
