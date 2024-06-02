import type { AppProps } from "next/app";
import "../public/assets/styles/main.scss";
import IsoFruitsLayout from "./../components/static/iso-fruits/Layout";
import DefaultLayout from "./index";

export default function App({ Component, pageProps, router }: AppProps) {

  const isIsoFruitsRoute = router.pathname.startsWith('/iso-fruits');

  // Select the layout based on the route
  const Layout = isIsoFruitsRoute ? IsoFruitsLayout : DefaultLayout;

  return (
    <html lang='en'>
      <meta property="og:site_name" content="registerkaro" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.registerkaro.in/_next/static/media/Logo.77348f99.png" />
      <link rel="icon" href="/favicon.ico" />
      {/* <Header /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </html>
  );
}