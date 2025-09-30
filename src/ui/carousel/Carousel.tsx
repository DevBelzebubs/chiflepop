import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  return (
    <div className='w-full z-0'>
      <Slider {...config}>
        <div>
          <img src="/img/Logo.svg" alt="Imagen 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/img/img2.jpg" alt="Imagen 2" className="w-full h-auto" />
        </div>
        <div>
          <img src="/img/img3.jpg" alt="Imagen 3" className="w-full h-auto" />
        </div>
        <div>
          <img src="/img/img4.jpg" alt="Imagen 4" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  )
}
export default Carousel;