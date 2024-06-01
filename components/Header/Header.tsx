import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/header/logo.svg";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <header className="Header">
      <Image
        src={logo}
        alt="iso Fruits"
        objectFit="cover"
        objectPosition="center"
        height={88}
        width={222}
      />
      <div className="navigation-links">
        <nav>
          <ul>
            <li>Home</li>
            <li>Vision and Mission</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      <div className="icons d-lg-none d-lg-block">
        {isopen ? (
          <span
            className="close"
            onClick={() => setIsopen(!isopen)}
          >
            &times;
          </span>
        ) : (
          <div
            onClick={() => {
              setIsopen(true);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
      <nav
        className="navigation"
        style={isopen ? { right: "0px" } : { right: "-100%" }}
      >
        <ul>
          <li>Home</li>
          <li>Vision and Mission</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
