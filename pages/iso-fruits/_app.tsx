import Layout from "../../components/static/iso-fruits/Layout";
import React from 'react';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };
  
  export default MyApp;