import Image from "next/image";
import React from "react";

interface imgProps {

  items: string | any;
}

const ClientComponent: React.FC<imgProps> = ({ items}) => {
  return (
    <div className="client-testimonial-cards">
      <div className="cardss">
        <Image src={items} alt="avatar-client" className="img-tems"  loading='lazy'/>
      </div>
    </div>
  );
};

export default ClientComponent;
