import Image from "next/image";
import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import left_arrow from "../../../../assets/images/static/iso-fruits/carousel/left_arrow.svg";
import right_arrow from "../../../../assets/images/static/iso-fruits/carousel/right_arrow.svg";
import slide_img_one from "../../../../assets/images/static/iso-fruits/carousel/slide_img_one.png";
import slide_img_two from "../../../../assets/images/static/iso-fruits/carousel/slide_img_two.png";
import slide_img_three from "../../../../assets/images/static/iso-fruits/carousel/slide_img_three.png";
import slide_img_four from "../../../../assets/images/static/iso-fruits/carousel/slide_img_four.png";
import slide_img_five from "../../../../assets/images/static/iso-fruits/carousel/slide_img_five.png";
import slide_img_six from "../../../../assets/images/static/iso-fruits/carousel/slide_img_six.png";
import slide_img_seven from "../../../../assets/images/static/iso-fruits/carousel/slide_img_seven.png";
import slide_img_eight from "../../../../assets/images/static/iso-fruits/carousel/slide_img_eight.png";

import ClientComponent from "./ClientComponent";


const testimonialsList = [
  { image: slide_img_one },
  { image: slide_img_two },
  { image: slide_img_three },
  { image: slide_img_four },
  { image: slide_img_five },
  { image: slide_img_six },
  { image: slide_img_seven },
  { image: slide_img_eight }
];


const Carousel = ()=> {
  const CustomPrevArrow: React.FC<CustomArrowProps> = ({
    className,
    onClick,
  }) => {
    return (
      <div onClick={onClick} className="left-arrow">
        {/* Desktop arrow */}
        <div>
          <Image onClick={onClick} src={left_arrow} alt="Previous" className="left-arrow-light" />
          <Image onClick={onClick} src={right_arrow} alt="next" className="left-arrow-dark" />
        </div>
      </div>
    );
  };

  const CustomNextArrow: React.FC<CustomArrowProps> = ({
    className,
    onClick,
  }) => {
    return (
      <div onClick={onClick} className="right-arrow">
        {/* Desktop arrow */}
        <div >
          <Image onClick={onClick} src={right_arrow} alt="next" className="right-arrow-dark" />
          <Image onClick={onClick} src={left_arrow} alt="next"  className="right-arrow-light"/>
        </div>
      </div>
    );
  };
  

  const settings = {
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    className: "center",
    centerMode: true,
    arrows:true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite:true,
    speed: 500,
    responsive: [
      {
        breakpoint:  990,
        settings: {
          arrows:false,
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite:true,
        }
      },
      {
        breakpoint: 768,
          settings:{
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite:true,
          
        }
      },
      {
        breakpoint: 550,
          settings:{
          arrows:false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite:true,
          centerMode:false,
        }
      },
      {
        breakpoint: 325,
          settings:{
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:false,
          centerMode:false,
        }
      }
    ]
  };

  return (
    <div className="client-para-testimonail">
    <div className="container">
      <h1>Banana ALL <span>product</span></h1>
        <Slider {...settings}>
          {
            testimonialsList.map((testimonial, index) => {
              return (
                
                <ClientComponent
                  key={index}
                  items={testimonial.image}
                />
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
