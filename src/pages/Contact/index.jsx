import { HiOutlineMail } from "react-icons/hi";
import { MdTabletMac } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import React from "react";

function Contact() {
  return (
    <div>
      <div className="text-center pt-20 pb-16 text-[50px] text-[#2b044d] Nui font-bold">
        Contact Us
      </div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1200px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1842.475107765901!2d71.26597944612756!3d40.37405635801177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1688899124235!5m2!1sru!2s"
            className="w-full h-[70vh]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h1 className="pt-16 pb-5 text-[#2b044d] text-[27px] Nui font-semibold">
            Get in Touch
          </h1>
          <div className="grid xl:gap-36 grid-cols-1 lg:gap-10 lg:grid-cols-10">
            <div className="col-span-7">
              <textarea
                name=""
                id=""
                className="px-5 py-2 w-full border border-[#e5e6e9] outline-none"
                placeholder="Enter Message"
                rows="10"
              ></textarea>
              <div className="flex mt-5 flex-col md:flex-row gap-10">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="text-[#495057] border-[#e5e6e9] outline-none border px-5 py-2 w-full "
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="text-[#495057] border-[#e5e6e9] outline-none border px-5 py-2 w-full "
                />
              </div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="text-[#495057] border-[#e5e6e9] outline-none border px-5 py-2 w-full mt-5"
              />
              <button className="lg:mb-0 mb-20 mt-10 border border-[#8f1bdc] text-[#8f1bdc] hover:bg-[#8f1bdc] bg-white hover:text-white py-3 px-10 text-sm font-normal">
                SEND
              </button>
            </div>
            <div className="col-span-3">
              <div className="flex gap-6 mb-10">
                <AiOutlineHome size={27} color="#8f9195" />
                <div className="text-start">
                  <p className="text-base text-[#2a2a2a] Nui font-medium pb-2">
                    Buttonwood, California.
                  </p>
                  <h1 className="text-[#8a8a8a] text-base Pop">
                    Rosemead, CA 91770
                  </h1>
                </div>
              </div>
              <div className="flex gap-6 mb-10">
                <MdTabletMac size={27} color="#8f9195" />
                <div className="text-start">
                  <p className="text-base text-[#2a2a2a] Nui font-medium pb-2">
                    +1 253 565 2365
                  </p>
                  <h1 className="text-[#8a8a8a] text-base Pop">
                    Mon to Fri 9am to 6pm
                  </h1>
                </div>
              </div>
              <div className="flex gap-6 mb-10">
                <HiOutlineMail size={27} color="#8f9195" />
                <div className="text-start">
                  <p className="text-base text-[#2a2a2a] Nui font-medium pb-2">
                    support@colorlib.com
                  </p>
                  <h1 className="text-[#8a8a8a] text-base Pop">
                    Send us your query anytime!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
