import type { AppProps } from "next/app";
import "../public/assets/styles/main.scss";
import Layout from "./../components/static/iso-fruits/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
  const is404 = router.pathname === '/404';

  return (
    <html lang='en'>
      <head>
        <meta property="og:site_name" content="registerkaro" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.registerkaro.in/_next/static/media/Logo.77348f99.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {is404 ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </body>
    </html>
  );
}
