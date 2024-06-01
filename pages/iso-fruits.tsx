import NextNProgress from "nextjs-progressbar";
import Header from "../components/static/iso-fruits/Header/Header";
import Hero from "../components/static/iso-fruits/Hero/Hero";
import Footer from "../components/static/iso-fruits/Footer";
import NewsLetterCTA from "../components/static/iso-fruits/bottom-section/NewsLetterCTA";
import IsolatedBanana from "../components/static/iso-fruits/bottom-section/IsolatedBanana";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
        <Header/>
        <Hero />
        <IsolatedBanana/>
        <NewsLetterCTA/>
        <Footer/>
      </>
    </div>
  );
}