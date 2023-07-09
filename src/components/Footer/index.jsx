import { IoIosSend } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import React from "react";
import img from "../../assets/images/logo/logo.png";

function Footer() {
  return (
    <div>
      <div className="flex justify-center py-24">
        <div className="w-[95%] md:w-[95%] xl:w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div className="text-start">
              <img src={img} alt="" />
              <p className="pt-8 font-normal text-base Pop text-[#707b8e] leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
            <div className="text-start">
              <h1 className="Nui text-lg font-bold">Quick Links</h1>
              <p className="pt-8 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                About
              </p>
              <p className="pt-3 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                Features
              </p>
              <p className="pt-3 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                Pricing
              </p>
              <p className="pt-3 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                Download
              </p>
              <p className="pt-3 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                Reviews
              </p>
            </div>
            <div className="text-start">
              <h1 className="Nui text-lg font-bold">Support</h1>
              <p className="pt-8 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                Report a bug
              </p>
              <p className="pt-3 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                Privacy Policy
              </p>
              <p className="pt-3 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                Terms & Conditions
              </p>
              <p className="pt-3 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                Sitemap
              </p>
              <p className="pt-3 text-base Pop font-light hover:pl-1 transition-all ease-in-out cursor-pointer text-[#868c98] hover:text-[#8f1bdc]">
                FAQs
              </p>
            </div>
            <div className="text-start">
              <h1 className="Nui text-lg font-bold">Newsletter</h1>
              <p className="pt-8 font-normal text-base Pop text-[#707b8e] leading-6">
                Heaven fruitful doesn't over lesser in days. Appear
              </p>
              <div className="flex pt-10">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="py-2 pl-4 text-[#707b8e] text-base Pop w-full bg-[#f9f9fe]"
                  name=""
                  id=""
                />
                <button className="py-3 px-5 bg-[#8f1bdc] cursor-pointer">
                  <IoIosSend size={22} color="white" />
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-start text-[#888888] flex items-center mt-20 font-light Pop gap-1 text-base">
            Copyright ©2023 All rights reserved | This template is made with{" "}
            <BiHeart
              size={16}
              className="text-[#f9218d] hover:text-[#8f1bdc]"
            />
            by
            <span className="text-[#f9218d] hover:text-[#8f1bdc]">
              Colorlib
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
