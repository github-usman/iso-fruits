import React, { ReactNode, useEffect, useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import Header from './Header/Header';
import Footer from './Footer';
import Image from 'next/image'
import whatsapp from '../../../assets/images/static/iso-fruits/Footer/whatsapp.svg'

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {

    const [showText, setShowText] = useState(false);

    const handleMouseEnter = () => {
      setShowText(true);
    };
  
    const handleScroll = () => {
      setShowText(false);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
      <div>
        <NextNProgress color="#ffa229" height={5} />
        <Header />
        <main className='main-conatiner-iso-fruits'>
          {children}
          <button className='whatsapp-btn'>
            <a href='https://wa.me/9873461839' target='_blank' rel='noreferrer noopener'
              onMouseEnter={handleMouseEnter}
            >
              <Image src={whatsapp} alt='whatsapp-logo' />
              {
                showText && <p className={showText ? 'visible-text' : 'hidden-text'}>WhatsApp us</p>
              }
            </a>
          </button>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;