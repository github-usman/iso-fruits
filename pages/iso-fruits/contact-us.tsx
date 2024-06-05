
import Image from "next/image";
import call from "../../assets/images/static/iso-fruits/contact-us/call.svg"
import email from "../../assets/images/static/iso-fruits/contact-us/email.svg"
const Home: React.FC = () => {
    return (
      <div className="iso-fruites-contact-us">
        <h5>We’d love to hear from you! Whether you have a question, need assistance, or want to share feedback, our team is here to help</h5>
        <div className="email-container">
          <Image src={email} alt={'email icons'} />
          
          <p><span>email - </span>isofruits.powder@gmail.com</p>
        </div>
        <div className="call-container">
          <Image src={call} alt={'call icons'} />
          <p><span>mobile No.</span>  +917011575046</p> </div>
      </div>
    );
  };
  
  export default Home;
