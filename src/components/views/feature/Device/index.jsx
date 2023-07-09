import React from "react";
import img1 from '../../../../assets/images/shape/app_btn1.png'
import img2 from '../../../../assets/images/shape/app_btn2.png'
import img3 from '../../../../assets/images/shape/available-app.png'
import img6 from '../../../../assets/images/shape/app-shape-left.png'
import img5 from '../../../../assets/images/shape/app-shape-top.png'

function Device() {
  return (
    <div className="relative">
      <div className="flex bg_device justify-center mt-16 py-20 lg:py-32 xl:py-56">
        <div className="xl:w-[1200px] md:w-[90%] w-[95%]">
          <div className="flex lg:items-center flex-col lg:flex-row xl:gap-44 lg:gap-10">
            <div className="text-start">
                <img src={img5} alt="" className="absolute top-24 hidden lg:block heartbeat"/>
                <img src={img6} alt="" className="absolute bottom-0 left-0 hidden xl:block"/>
              <h1 className="Nui text-white text-[50px] lg:text-[40px] font-semibold">Our App Available For Any Device Download now</h1>
              <p className="Pop text-base text-white py-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore fug.
              </p>
              <div className="flex gap-5">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
              </div>
            </div>
            <img src={img3} className="w-full lg:w-[50%] lg:mt-0 mt-10" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Device;
