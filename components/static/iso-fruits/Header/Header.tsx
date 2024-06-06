import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../assets/images/static/iso-fruits/header/logo.svg";
import hamburger from "../../../../assets/images/static/iso-fruits/header/burger-menu-svgrepo-com.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  const router = useRouter();

  const openHandler = () => {
    setIsopen(true);
  }
  const closeHandler = () => {
    setIsopen(false);
  }

  const handleNavigation = (path: string) => {
    router.replace(path);
    closeHandler();
  }

  
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/b2b-solutions">B2B Solutions</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
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
            <span className="close" onClick={closeHandler}>
              &times;
            </span>
          </div>
        ) : (
          <div onClick={openHandler} >
            <Image src={hamburger} alt="Hamburger" className="hamburger" />
          </div>
        )}
      </div>
      <nav
        className="navigation"
        style={isopen ? { right: "0px" } : { right: "-100%" }}
      >
        <ul>
          <li><button type="button" onClick={() => handleNavigation("/")}>Home</button></li>
          <li><button type="button" onClick={() => handleNavigation("/product")}>Product</button></li>
          <li><button type="button" onClick={() => handleNavigation("/b2b-solutions")}>B2B Solutions</button></li>
          <li><button type="button" onClick={() => handleNavigation("/about-us")}>About Us</button></li>
          <li><button type="button" onClick={() => handleNavigation("/contact-us")}>Contact Us</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
