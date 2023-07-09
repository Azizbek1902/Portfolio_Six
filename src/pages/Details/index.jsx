import React from "react";
import Container from "../../components/views/blog/Container";
import Slider from "../../components/views/blog/Slider";

function Details() {
  return (
    <div>
      <h1 className="text-center text-[#2b044d] font-bold text-[50px] Nui mt-32 mb-16">
        Single Blog​
      </h1>
      <div className="flex justify-center">
        <div className="xl:w-[1200px] md:w-[90%] w-[95%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8 mb-10">
              <Container />
            </div>
            <div className="lg:col-span-4 mb-10">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
