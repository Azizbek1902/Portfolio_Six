import React from "react";
import img from "../../../assets/images/gallery/card_dot.png";

function Pricin({ color }) {
  return (
    <div>
      <div className="flex justify-center pt-20 pb-16">
        <div
          className={`${
            color ? "text-white" : "text-[#2b044d]"
          } text-center w-[95%] Nui text-[50px] font-bold md:w-[80%] lg:w-[60%] xl:w-[560px]`}
        >
          Choose Your Very Best Pricing Plan.
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            <div className="text-center relative bg-white opacity-100 py-10 px-5 w-full shadowPricing">
              <div className="text-center border-b-2 border-[#f4f4f4]">
                <h2 className="Pop text-[#57667e] text-2xl font-semibold pb-8">
                  2 Years
                </h2>
                <h1 className="text-[#6a56a6] Pop text-[50px] font-medium mb-10">
                  $05 <span className="text-base text-[#6a56a6]">/ month</span>
                </h1>
              </div>
              <p className="text-base text-[#717081] font-light pb-5 pt-10 text-center">
                Increase traffic 50%
              </p>
              <p className="text-base text-[#717081] font-light pb-5 text-center">
                E-mail support
              </p>
              <p className="text-base text-[#717081] font-light pb-5 text-center">
                10 Free Optimization
              </p>
              <p className="text-base text-[#717081] font-light pb-5 text-center">
                24/7 support
              </p>
              <button className="codemy">GET STARTED</button>
              <div className="carttt">
                <img
                  src={img}
                  className="z-[-1] absolute right-0 bottom-0 cartImg"
                  alt=""
                />
              </div>
            </div>
            <div className="text-center relative bg-white py-10 px-5 w-full shadowPricing">
              <div className="text-center border-b-2 border-[#f4f4f4]">
                <h2 className="Pop text-[#57667e] text-2xl font-semibold pb-8">
                  2 Years
                </h2>
                <h1 className="text-[#6a56a6] Pop text-[50px] font-medium mb-10">
                  $05 <span className="text-base text-[#6a56a6]">/ month</span>
                </h1>
              </div>
              <p className="text-base text-[#717081] font-light pb-5 pt-10 text-center">
                Increase traffic 50%
              </p>
              <p className="text-base text-[#717081] font-light pb-5 text-center">
                E-mail support
              </p>
              <p className="text-base text-[#717081] font-light pb-5 text-center">
                10 Free Optimization
              </p>
              <p className="text-base text-[#717081] font-light pb-5 text-center">
                24/7 support
              </p>
              <button className="codemy">GET STARTED</button>
              <div className="carttt">
                <img
                  src={img}
                  className="z-[-1] absolute right-0 bottom-0 cartImg"
                  alt=""
                />
              </div>
            </div>
            <div className="text-center relative bg-white py-10 px-5 w-full shadowPricing">
              <div className="text-center border-b-2 border-[#f4f4f4]">
                <h2 className="Pop text-[#57667e] text-2xl font-semibold pb-8">
                  2 Years
                </h2>
                <h1 className="text-[#6a56a6] Pop text-[50px] font-medium mb-10">
                  $05 <span className="text-base text-[#6a56a6]">/ month</span>
                </h1>
              </div>
              <p className="text-base text-[#717081] font-light pb-5 pt-10 text-center">
                Increase traffic 50%
              </p>
              <p className="text-base text-[#717081] font-light pb-5 text-center">
                E-mail support
              </p>
              <p className="text-base text-[#717081] font-light pb-5 text-center">
                10 Free Optimization
              </p>
              <p className="text-base text-[#717081] font-light pb-5 text-center">
                24/7 support
              </p>
              <button className="codemy">GET STARTED</button>
              <div className="carttt">
                <img
                  src={img}
                  className="z-[-1] absolute right-0 bottom-0 cartImg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricin;
