import React from "react";
import Header from "../../components/views/feature/Header";
import Carousel from "../../components/views/feature/Carousel";
import Device from "../../components/views/feature/Device";
import Scroll from "../../components/views/feature/Scroll";

function Features() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <h1 className="text-center xl:w-[500px] w-[90%] md:w-[70%] lg:w-[60%] Nui leading-[60px] md:text-[50px] text-4xl text-[#2b044d] font-bold ">
          What Our Customers Have to Say
        </h1>
      </div>
      <Carousel />
      <Device />
      <Scroll />
    </div>
  );
}

export default Features;
