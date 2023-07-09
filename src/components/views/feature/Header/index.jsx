import React from "react";
import img from "../../../../assets/images/shape/best-features.png";
import img2 from "../../../../assets/images/logo/foo.jpg";

function Header() {
  return (
    <div>
      <div className="flex xl:justify-start justify-center lg:justify-end py-20">
        <div className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-10">
            <div className="hidden xl:block xl:col-span-5">
              <img src={img} alt="" />
            </div>
            <div className="flex items-center xl:col-span-7">
              <div className="text-start">
                <h1 className="font-bold Nui text-[50px] text-[#2b044d] xl:pb-20 pb-10 xl:pr-20">
                  Some of the best features Of Our App!
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                  <div className="flex gap-2 md:mb-5 mb-12 items-start">
                    <img src={img2} alt="" />
                    <div className="text-start">
                      <h1 className="Nui text-[#23182c] text-2xl font-semibold">Easy to Costomize</h1>
                      <p className="text-[#707b8e] Pop text-base font-normal pt-2 leading-8">
                        Aorem psum olorsit amet ectetur adipiscing elit, sed
                        dov.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 md:mb-5 mb-12 items-start">
                    <img src={img2} alt="" />
                    <div className="text-start">
                      <h1 className="Nui text-[#23182c] text-2xl font-semibold">Extreme Security</h1>
                      <p className="text-[#707b8e] Pop text-base font-normal pt-2 leading-8">
                        Aorem psum olorsit amet ectetur adipiscing elit, sed
                        dov.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 md:mb-5 mb-12 items-start">
                    <img src={img2} alt="" />
                    <div className="text-start">
                      <h1 className="Nui text-[#23182c] text-2xl font-semibold">Customer Support</h1>
                      <p className="text-[#707b8e] Pop text-base font-normal pt-2 leading-8">
                        Aorem psum olorsit amet ectetur adipiscing elit, sed
                        dov.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 md:mb-5 mb-12 items-start">
                    <img src={img2} alt="" />
                    <div className="text-start">
                      <h1 className="Nui text-[#23182c] text-2xl font-semibold">Creative Design</h1>
                      <p className="text-[#707b8e] Pop text-base font-normal pt-2 leading-8">
                        Aorem psum olorsit amet ectetur adipiscing elit, sed
                        dov.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
