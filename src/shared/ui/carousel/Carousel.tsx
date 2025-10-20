import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const config = {
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
    <div className='w-full relative -z-10 -mt-4'>
      <Slider {...config}>
        <div>
          <img src="/img/Logo.svg" alt="Imagen 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/img/Carousel-img1.svg" alt="Imagen 2" className="w-full h-auto" />
        </div>
        <div>
          <img src="/img/Carousel-img2.svg" alt="Imagen 3" className="w-full h-auto" />
        </div>
        <div>
          <img src="/img/Carousel-img3.svg" alt="Imagen 4" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  )
}
export default Carousel;