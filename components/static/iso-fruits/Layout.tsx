import React, { ReactNode } from 'react';
import NextNProgress from 'nextjs-progressbar';
import Header from './Header/Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div>
        <NextNProgress color="#ffa229" height={5} />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;