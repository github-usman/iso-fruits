import NextNProgress from "nextjs-progressbar";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer";
import NewsLetterCTA from "../components/Home/NewsLetterCTA";
import IsolatedBanana from "../components/Home/IsolatedBanana";

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