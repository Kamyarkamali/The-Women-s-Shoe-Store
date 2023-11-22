
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../public/slider/1.jpg"
import image2 from "../../../public/slider/2.jpg"
import image3 from "../../../public/slider/3.png"
import image4 from "../../../public/slider/4.png"

//INTERFACE
import { IMAGE } from "../../types/interface";

export default function SimpleSlider() {

    const images:IMAGE[]=[
        {id:1,image:image1},
        {id:2,image:image2},
        {id:3,image:image3},
        {id:4,image:image4},
    ]

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };
  return (
    <div className="max-w-[1000px] mt-5 mx-auto">
      <Slider {...settings}>

        {images.map((item)=>(
        <div key={item.id}>
            <img src={item.image} alt="/" className="rounded-lg"/>
            </div>
            ))}
    </Slider>
            </div>
  );
}