import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import gif1 from "../../assets/gif/video1.gif";
import gif2 from "../../assets/gif/video2.gif";
import gif3 from "../../assets/gif/video3.gif";
import gif4 from "../../assets/gif/video4.gif";
import gif5 from "../../assets/gif/video5.gif";
import gif6 from "../../assets/gif/video6.gif";
import gif7 from "../../assets/gif/video7.gif";
import gif8 from "../../assets/gif/video8.gif";
import gif9 from "../../assets/gif/video9.gif";
import gif10 from "../../assets/gif/video10.gif";
import gif11 from "../../assets/gif/video11.gif";
import gif12 from "../../assets/gif/video12.gif";
import gif13 from "../../assets/gif/video13.gif";
import gif14 from "../../assets/gif/video14.gif";
import gif15 from "../../assets/gif/video15.gif";


import { useMediaQuery } from "react-responsive";

const images = [
  gif1,
  gif2,
  gif3,
  gif4,
  gif5,
  gif6,
  gif7,
  gif8,
  gif9,
  gif10,
  gif11,
  gif12,
  gif13,
  gif14,
  gif15,
];

export function CardDepoiments2() {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Swiper
      //   onClick={() => {
      //     navigate(`/details/${id}`);
      //     patchSite();
      //   }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={30}
     
      slidesPerView={isMobile ? 2 : 5 }
      modules={[ Autoplay]}
      className="mySwiper !bg-transparent"
    >
      {images.map((item, index) => (
        <SwiperSlide className="w-28 rounded-sm !bg-transparent pb-5">
          <div className=" overflow-hidden rounded-sm">
            <img
              className="w-full  hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-sm "
              src={images[index]}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
