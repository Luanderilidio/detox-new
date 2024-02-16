import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import image1 from "../../assets/prova/1.png";
import image2 from "../../assets/prova/2.jpg";
import image3 from "../../assets/prova/3.png";
import image4 from "../../assets/prova/4.jpg";
import image5 from "../../assets/prova/5.png";
import image6 from "../../assets/prova/6.png";
import image7 from "../../assets/prova/7.png";
import image8 from "../../assets/prova/8.png";
import image9 from "../../assets/prova/9.jpg";
import image10 from "../../assets/prova/10.png";
import image11 from "../../assets/prova/11.jpg";
import image12 from "../../assets/prova/12.png";
import image13 from "../../assets/prova/13.png";
import image14 from "../../assets/prova/14.jpg";
import image15 from "../../assets/prova/15.png";
import image16 from "../../assets/prova/16.jpg";
import image17 from "../../assets/prova/17.png";
import image18 from "../../assets/prova/18.png";
import image19 from "../../assets/prova/19.jpg";
import image20 from "../../assets/prova/20.png";

import { useMediaQuery } from "react-responsive";

export const images1 = [image1, image2, image3, image4, image5];
export const images2 = [image6, image7, image8, image9, image10];
export const images3 = [image11, image12, image13, image14, image15];
export const images4 = [image16, image17, image18, image19, image20];

export function CardNews(props: any) {
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
      // pagination={{
      //   dynamicBullets: false,
      //   enabled: true
      // }}
      slidesPerView={1}
      modules={[ Autoplay]}
      className="mySwiper !bg-transparent"
    >
      {props.images.map((item: any, index: any) => (
        <SwiperSlide className="rounded-sm">
          <div className="overflow-hidden w-full rounded-sm">
            <img
              className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-sm "
              src={item}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
