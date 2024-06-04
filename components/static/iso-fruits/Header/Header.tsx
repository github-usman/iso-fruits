import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../assets/images/static/iso-fruits/header/logo.svg";
import hamburger from "../../../../assets/images/static/iso-fruits/header/burger-menu-svgrepo-com.svg";
import Link from "next/link";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <header className="Header">
      <Image
        src={logo}
        alt="iso Fruits"
        objectFit="cover"
        objectPosition="center"
        className="iso-fruits-logo"
      />
      <div className="navigation-links">
        <nav>
          <ul>
            <li>
              <Link href="/iso-fruits">Home</Link>
            </li>
            <li>
              <Link href="/iso-fruits/product">Product</Link>
            </li>
            <li>
              <Link href="/iso-fruits/b2b-solutions">B2B Solutions</Link>
            </li>
            <li>
              <Link href="/iso-fruits/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/iso-fruits/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* mobile view */}
      <div className="icons position-relative d-lg-none d-lg-block">
        {isopen ? (
          <div className="nav-head position-absolute">
            <Image
              src={logo}
              alt="iso Fruits"
              objectFit="cover"
              objectPosition="center"
              width={151}
              height={60}
              className="fruits-logo"
            />
            <span className="close" onClick={() => setIsopen(!isopen)}>
              &times;
            </span>
          </div>
        ) : (
          <div
            onClick={() => {
              setIsopen(true);
            }}
          >
            <Image src={hamburger} alt="Hamburger" className="hamburger" />
          </div>
        )}
      </div>
      <nav
        className="navigation"
        style={isopen ? { right: "0px" } : { right: "-100%" }}
      >
        <ul>
          <li><Link href="/iso-fruits">Home</Link></li>
          <li><Link href="/iso-fruits/product">Product</Link></li>
          <li><Link href="/iso-fruits/b2b-solutions">B2B Solutions</Link></li>
          <li><Link href="/iso-fruits/about-us">About Us</Link></li>
          <li><Link href="/iso-fruits/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
