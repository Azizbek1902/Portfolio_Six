import { BsFillPlayFill } from "react-icons/bs"; 
import React from "react";
import img from '../../../../assets/images/hero/hero_right.png'

function Header() {
  return (
    <div>
      <div className="flex justify-center bg-[#F4FEFF]">
        <div className="w-[95%] md:w-[90%] xl:w-[1200px] mt-20">
          <div className="flex lg:justify-between justify-start items-center">
            <div className="text-start w-[90%] md:w-[85%] lg:w-[60%] xl:w-[500px]">
              <p className="text-base uppercase pb-5 text-[#2b044d] Pop">App Landing Page</p>
              <h1 className="text-[65px] text-[#2b044d] font-bold Nui">
                Get things done <br /> with Appco
              </h1>
              <p className="text-[#707b8e] text-base font-normal Pop pr-0 xl:pr-20 pt-8 pb-10">
                Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusm tempor incididunt ulabore et dolore magna aliqua.
              </p>
              <div className="flex gap-5 items-center md:mb-10 lg:mb-0 mb-8">
                <button className="btn">Download</button>
                <div className="rounded-full play pl-5 pt-5 bg-[#D852E8]">
                    <BsFillPlayFill color="white" size={24}/>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
                <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
