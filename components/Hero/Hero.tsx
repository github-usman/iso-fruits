import React from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-top">
        <div className="background"></div>
        <div className="foreground">
            <h1>BANANA POWDER</h1>
            <button>Learn More</button>
        </div>
      </div>
      <div className="hero-bottom"></div>
      <div className="banana-fruits">
        <h2>Banana Fruits</h2>
        <p>Banana beauty products offer hydration and nourishment for skin and hair, thanks to their high potassium and vitamin content.</p>
      </div>
    </div>
  );
};

export default Hero;