import NextNProgress from "nextjs-progressbar";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <>
        <NextNProgress color="#ffa229" height={5} />
        <Header/>
      
      </>
    </div>
  );
}