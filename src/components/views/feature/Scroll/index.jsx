import React from "react";
import img from "../../../../assets/images/shape/say-shape-left.png";
import img1 from "../../../../assets/images/shape/say-shape-right.png";

function Scroll() {
  return (
    <div>
      <div className="relative border-b border-[#ffc9fd] overflow-hidden">
        <div className="flex justify-center">
          <div className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1200px]">
            <img src={img} alt="" className="scrollImg hidden xl:block" />
            <div className="flex lg:justify-between justify-start items-center flex-col lg:flex-row py-20">
              <h1 className="Nui text-[50px] font-bold text-[#282828] xl:w-[50%] xl:pl-40 lg:mb-0 mb-10 lg:text-start text-center">
                Say Hello To The Collaboration Hub.
              </h1>
              <button className="btn">Contact Us</button>
            </div>
            <img
              src={img1}
              className="absolute right-0 bottom-0 hidden lg:block"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
