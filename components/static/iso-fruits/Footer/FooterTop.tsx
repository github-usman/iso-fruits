import Image from 'next/image'
import React from 'react'
import logo from '../../../../assets/images/static/iso-fruits/Footer/logo.svg'
import facebook from '../../../../assets/images/static/iso-fruits/Footer/facebook.svg'
import linkedin from '../../../../assets/images/static/iso-fruits/Footer/linkedin.svg'
import twitter from '../../../../assets/images/static/iso-fruits/Footer/twitter.svg'
import instagram from '../../../../assets/images/static/iso-fruits/Footer/instagram.svg'
import Link from 'next/link'

const FooterTop = () => {
  return (
    <div className='footer-top'>
      <div className='container'>
        <div className='links-and-socials'>

          <div className="links-container">

            <div className='img-container'>
              <Image src={logo} alt='iso-logo' loading='lazy'/>
            </div>
            <div className='links'>
              <Link href='/iso-fruits/product'>Product</Link>
              <Link href='/iso-fruits/b2b-solutions'>Partner with Us Today</Link>
              <Link href='/iso-fruits/about-us'>About us</Link>
              <Link href='/iso-fruits/contact-us'>Contact Us</Link>
            </div>
          </div>

          <div className="socials-container">
            <div className="socials">
              <a href='https://www.facebook.com/isofruits' target='_blank' rel='noreferrer noopener'>
                <Image src={facebook} alt='fb-logo' className='social-logo' />
              </a>
              <a href='https://www.linkedin.com/company/iso-fruits' target='_blank' rel='noreferrer noopener'>
                <Image src={linkedin} alt='linkedin-logo' className='social-logo' />
              </a>
              <a href='https://www.instagram.com/isofruits7?igsh=MWg2dTl1eWl6MGgzOA==' target='_blank' rel='noreferrer noopener'>
                <Image src={instagram} alt='insta-log' className='social-logo' />
              </a>
              <a href='https://www.twitter.com/' target='_blank' rel='noreferrer noopener'>
                <Image src={twitter} alt='twitter-x-log' className='social-logo' />
              </a>
            </div>

            <p>Follow Us</p>

          </div>

        </div>

        <div className='text'>
          While we strive to provide high-quality banana powder through our online platform, please note that individual experiences may vary. The information provided on this website is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new dietary supplement regimen. Additionally, please read and follow the instructions provided on the product packaging carefully. We are not liable for any adverse reactions or misuse of the product.
        </div>
      </div>  
    </div>
  )
}

export default FooterTop