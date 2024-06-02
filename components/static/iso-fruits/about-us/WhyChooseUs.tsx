import Image from "next/image";
import React from "react";
import star from "../../../../assets/images/static/iso-fruits/about-us/star.svg"
import quality from "../../../../assets/images/static/iso-fruits/about-us/quality.svg"
import Healthy from "../../../../assets/images/static/iso-fruits/about-us/Healthy.svg"
import Fresh from "../../../../assets/images/static/iso-fruits/about-us/Fresh.svg"



const list_why_choose = [
    {
        icons:quality,
        title:"Quality",
        desc:"We facilitate our customers with the farm-fresh quality products. You never deliver stale or contaminated food to them."
    },
    {
        icons:Healthy,
        title:"Healthy",
        desc:"Harmful pesticide free fruits are always more nutritious and healthy"
    },
    {
        icons:Fresh,
        title:"fresh",
        desc:"We offer you fresh fruits and vegetables which are sourced from organic farms so that you can healthier life Lead a healthier life"
    }
]

const WhyChooseUs = () => {
  return <div className="iso-fruites-why-choose-us">
            <div className="heading">
                <Image src={star} alt="why choose us start left right" ></Image>
                <h2>Why choose us</h2>
                <Image src={star} alt="why choose us start left right" ></Image>
            </div>
            <div className="list-container">
            {
                list_why_choose.map((item,index)=>(
                    <div key={index}>
                        <Image src={item.icons} alt={item.title} ></Image>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                ))
            }
            </div>


         </div>;
};

export default WhyChooseUs;
