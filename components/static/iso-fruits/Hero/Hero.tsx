import React from "react";
import HeroSkeleton from "./heroSkeleton";

interface HeroProps {
  isLoading: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoading }) => {
  if (isLoading) {
    return <HeroSkeleton />;
  }
  return (
    <div className="iso-fruits-Hero ">
      <div className="hero-top">
        <div className="background"></div>
        <div className="foreground">
            <h1>BANANA POWDER</h1>
            <button>Shop Now</button>
        </div>
      </div>
      <div className="hero-bottom"></div>
      <div className="banana-fruits">
        <div>
          <h2>Banana Fruits</h2>
          <p>Banana beauty products offer hydration and nourishment for skin and hair, thanks to their high potassium and vitamin content.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;