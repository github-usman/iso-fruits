
import Layout from "../../components/static/iso-fruits/Layout";
import Hero from "../../components/static/iso-fruits/Hero/Hero";
import NewsLetterCTA from "../../components/static/iso-fruits/bottom-section/NewsLetterCTA";
import IsolatedBanana from "../../components/static/iso-fruits/bottom-section/IsolatedBanana";
import Carousel from "../../components/static/iso-fruits/carousel/Carousel";

const Home: React.FC = () => {
    return (
      <Layout>
        <Hero />
        <Carousel />
        <IsolatedBanana />
        <NewsLetterCTA />
      </Layout>
    );
  };
  
  export default Home;
