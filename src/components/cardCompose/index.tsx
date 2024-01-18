import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Link } from "@mui/material";
import { PropsCompose } from "./data";



export default function CardCompose({
  name,
  description,
  images,
  link,
}: PropsCompose) {
  return (
    <div className="col-span-4 sm:col-span-1 bg-white flex flex-col gap-3 rounded-b-2xl transition ease-in-out shadow-lg hover:drop-shadow-xl shadow-black/30 ">
      <div className=" rounded-2xl drop-shadow-xl relative ">
        <Swiper
          //   onClick={() => {
          //     navigate(`/details/${id}`);
          //     patchSite();
          //   }}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-t-2xl">
            <div className="overflow-hidden rounded-t-2xl w-full ">
              <img
                className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-t-2xl "
                src={images[0]}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-t-2xl">
            <div className="overflow-hidden rounded-t-2xl w-full  ">
              <img
                className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-t-2xl "
                src={images[0]}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-3 right-2 z-50 ">
          {/* <button
            className={`transition ease-in-out active:scale-150 duration-100 flex flex-col items-center justify-center cursor-pointer`}
          >
            <Heart size={20} weight="fill" className="" />
            <p className="font-semibold text-xs cursor-pointer">heartCount</p>
          </button> */}
          {/* <button
            className={`mt-2
            } transition ease-in-out active:scale-150 duration-100 flex flex-col items-center justify-center cursor-pointer`}
          >
            <ShareNetwork size={20} weight="fill" className=" " />
            <p className="font-semibold text-xs cursor-pointer">shared</p>
          </button> */}
        </div>
        <p className="flex items-center justify-center gap-1 font-Montserrat absolute bottom-3 right-3 z-50 w-fit rounded-md px-2 py-2 leading-none text-[.6rem] font-normal bg-[#25D366] text-[#ffffff] shadow-sm shadow-[#005A09]/50  bg-opacity-20 backdrop-filter backdrop-blur-lg">
          <EnergySavingsLeafIcon sx={{ fontSize: 14 }} />
          100% Natural
        </p>
        {/* <Link>
          <p className="flex items-center justify-center gap-1 absolute top-3 left-3 z-50 w-fit rounded-md px-2 py-2 leading-none text-[.7rem] font-bold bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-md shadow-gray-400/50 text-gray-500 cursor-pointer">
            <NewspaperIcon sx={{ fontSize: 14 }} />
            Saiba mais
          </p>
        </Link> */}
        {/* {typeWorkBody === 0 && (
          <img className="w-14 bottom-3 left-3 z-50 absolute" src={Size_3} />
        )} */}
      </div>
      <div className="px-5 pb-5">
        <h1 className="font-Montserrat font-bold text-2xl text-green-700">
          {name}
        </h1>
        <p className="font-Poppins text-md font-light leading-none mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
