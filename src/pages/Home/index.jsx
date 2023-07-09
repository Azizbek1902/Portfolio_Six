import React from "react";
import Header from "../../components/views/home/Header";
import HeadTwo from "../../components/views/feature/Header";
import Carousel from "../../components/views/feature/Carousel";
import Device from "../../components/views/feature/Device";
import Servis from "../../components/views/Servises";
import Pricin from "../../components/views/Pricing";
import Scroll from "../../components/views/feature/Scroll";
import Carouselel from "../../components/views/home/Carouslel";

function Home() {
  return (
    <div>
      <Header />
      <HeadTwo />
      <div className="bg-[#f4feff] xl:py-32 py-20 mb-20">
        <Servis active={true} />
      </div>
      <Carouselel />
      <div className="h-[80vh] bgImg relative w-full ">
        <div className="bgColor absolute z-10">
          <div className="">
          <Pricin color={true} />
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:mt-96 md:mt-[950px] mt-[1600px]">
        <h1 className="text-center xl:w-[500px] mb-10 w-[90%] md:w-[70%] lg:w-[60%] Nui leading-[60px] md:text-[50px] text-4xl text-[#2b044d] font-bold ">
          What Our Customers Have to Say
        </h1>
      </div>
      <Carousel />
      <Device />
      <Scroll />
    </div>
  );
}

export default Home;
