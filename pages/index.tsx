
import { useEffect, useState } from "react";
import Hero from "../components/static/iso-fruits/Hero/Hero";
import IsolatedBanana from "../components/static/iso-fruits/bottom-section/IsolatedBanana";
import NewsLetterCTA from "../components/static/iso-fruits/bottom-section/NewsLetterCTA";
import Carousel from "../components/static/iso-fruits/carousel/Carousel";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    // Ensure this code runs only on the client side
    const isClient = typeof window !== 'undefined';

    if (isClient) {
      const visitStatus = !sessionStorage.getItem('visited');
      setFirstVisit(visitStatus);

      if (visitStatus) {
        const timer = setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('visited', 'true');
        }, 3000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
      } else {
        // If it's not the first visit, immediately set loading to false
        setIsLoading(false);
      }
    }
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
