import Image from 'next/image'
import React from 'react'
import logo from '../../assets/images/Footer/logo.svg'
import facebook from '../../assets/images/Footer/facebook.svg'
import linkedin from '../../assets/images/Footer/linkedin.svg'
import twitter from '../../assets/images/Footer/twitter.svg'
import instagram from '../../assets/images/Footer/instagram.svg'
import Link from 'next/link'

const FooterTop = () => {
  return (
    <div className='footer-top'>
      <div className='container'>
        <div className='links-and-socials'>

          <div className="links-container">

            <div className='img-container'>
              <Image src={logo} alt=''/>
            </div>
            <div className='links'>
              <Link href='/'>Banana Product</Link>
              <Link href='/'>Partner with Us Today</Link>
              <Link href='/'>About us</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>

          <div className="socials-container">
            <div className="socials">
              <a href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'>
                <Image src={facebook} alt=''/>
              </a>
              <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer noopener'>
                <Image src={linkedin} alt=''/>
              </a>
              <a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'>
                <Image src={instagram} alt=''/>
              </a>
              <a href='https://www.twitter.com/' target='_blank' rel='noreferrer noopener'>
                <Image src={twitter} alt=''/>
              </a>
            </div>

            <p>Social app</p>

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