import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import img1 from '../../../../assets/images/prising/1.png'
import img2 from '../../../../assets/images/prising/2.png'
import img3 from '../../../../assets/images/prising/3.png'
import img4 from '../../../../assets/images/prising/4.png'
import img5 from '../../../../assets/images/prising/5.png'
import img6 from '../../../../assets/images/prising/6.png'
import img7 from '../../../../assets/images/prising/7.png'
import img8 from '../../../../assets/images/prising/8.png'
import img9 from '../../../../assets/images/prising/9.png'
import img10 from '../../../../assets/images/prising/10.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Carousel() {
  const data = [
    {
      id: 1,
      img: img1
    },
    {
      id: 2,
      img: img2
    },
    {
      id: 3,
      img: img3
    },
    {
      id: 4,
      img: img4
    },
    {
      id: 5,
      img: img5
    },
    {
      id: 6,
      img: img6
    },
    {
      id: 7,
      img: img7
    },
    {
      id: 8,
      img: img8
    },
    {
      id: 9,
      img: img9
    },
    {
      id: 10,
      img: img10
    }
  ]
  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1140px]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {data.map((item) => (
              <SwiperSlide className="text-start shadowa p-10">
                <img src={item.img} className="rounded-full" alt="" />
                <h1 className="text-[#712fda] text-xl Nui pt-6">Welcome To The Best Model Winner Contest</h1>
                <p className="Pop text-[#707b8e] text-base pt-4 pb-10">
                  Utenim ad minim veniam quisnostrud exercitation ullamcolabor
                  nisiut aliquip ex ea commodo consequat duis aute irure dolor
                  in represse.
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex justify-between w-full absolute top-0 z-40">
        <div className="h-[50vh] xl:w-[35%] lg:w-[50%] md:w-5 w-1 bg-white opacity-[0.8]"></div>
        <div className="h-[50vh] xl:w-[35%] lg:w-[5%] md:w-5 w-1 bg-white opacity-[0.8]"></div>
      </div>
    </div>
  );
}

export default Carousel;
