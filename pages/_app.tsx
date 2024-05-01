import type { AppProps } from "next/app";
import "../public/assets/styles/main.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <html lang='en'>
      <meta property="og:site_name" content="registerkaro" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.registerkaro.in/_next/static/media/Logo.77348f99.png" />
      <link rel="icon" href="/favicon.ico" />
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </html>
  );
}