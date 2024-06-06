
import Hero from "../components/static/iso-fruits/Hero/Hero";
import IsolatedBanana from "../components/static/iso-fruits/bottom-section/IsolatedBanana";
import NewsLetterCTA from "../components/static/iso-fruits/bottom-section/NewsLetterCTA";
import Carousel from "../components/static/iso-fruits/carousel/Carousel";

const Home: React.FC = () => {
    return (
      <>
        <Hero />
        <Carousel />
        <IsolatedBanana />
        <NewsLetterCTA />
      </>
    );
  };
  
  export default Home;
