
import { useEffect, useState } from "react";
import Hero from "../components/static/iso-fruits/Hero/Hero";
import IsolatedBanana from "../components/static/iso-fruits/bottom-section/IsolatedBanana";
import NewsLetterCTA from "../components/static/iso-fruits/bottom-section/NewsLetterCTA";
import Carousel from "../components/static/iso-fruits/carousel/Carousel";

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }, []);
    return (
      <>
        <Hero isLoading={isLoading}/>
        <Carousel />
        <IsolatedBanana />
        <NewsLetterCTA/>
      </>
    );
  };
  
  export default Home;
