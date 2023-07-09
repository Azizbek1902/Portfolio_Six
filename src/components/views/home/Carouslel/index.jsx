import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../assets/images/gallery/App1.png";
import img2 from "../../../../assets/images/gallery/App2.png";
import img3 from "../../../../assets/images/gallery/App3.png";

// Import Swiper styles
import "swiper/css";
function Carouselel() {
  return (
    <div>
      <div className="flex md:justify-end justify-center pb-20">
        <div className="w-[95%] md:w-[90%] xl:w-[1300px]">
          <div className="flex xl:gap-6 lg:gap-5 flex-col lg:flex-row items-center">
            <div className="text-start xl:w-[750px] lg:w-[500px] w-full">
              <h1 className="text-[40px] Nui text-[#2b044d] font-bold">
                Applic Apps Screenshot
              </h1>
              <p className="pt-10 text-[#707b8e] text-base Pop font-normal leading-7">
                Lorem ipsum dolor sit amet, consecadipiscing elit, sed do
                eiusmod tempor incididunt ut ore et dolore magna aliqua. Quis
                ipsum suspendisse gravida. Risus commodo viverra maecenasan
                lacus vel facilisis.
              </p>
            </div>
            <Swiper
              loop={true}
              rewind={true}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1440: {
                  slidesPerView: 3.5,
                },
              }}
            >
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carouselel;
