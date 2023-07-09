import { AiOutlineSearch } from "react-icons/ai";
import React from "react";
import img1 from "../../../../assets/images/post/post_1.png";
import img2 from "../../../../assets/images/post/post_2.png";
import img3 from "../../../../assets/images/post/post_3.png";
import img4 from "../../../../assets/images/post/post_4.png";
import img5 from "../../../../assets/images/post/post_5.png";
import img6 from "../../../../assets/images/post/post_6.png";
import img7 from "../../../../assets/images/post/post_7.png";
import img8 from "../../../../assets/images/post/post_8.png";
import img9 from "../../../../assets/images/post/post_9.png";
import img11 from "../../../../assets/images/post/post_10.png";

function Slider() {
  return (
    <div>
      <div className="bg-[#fbf9ff] p-8 mb-10">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search Keyword"
            className="border-[#f0e9ff] outline-none border p-3 text-[#999999] text-sm w-full"
          />
          <button className="cursor-pointer p-3 bg-[#8f1bdc] border-[#f0e9ff] border">
            <AiOutlineSearch color="white" size={20} />
          </button>
        </div>
        <button className="mt-3 text-[#8f1bdc] border border-[#8f1bdc] bg-white hover:bg-[#8f1bdc] hover:text-white w-full py-4 font-normal  text-center text-sm Nui">
          SEARCH
        </button>
      </div>
      <div className="bg-[#fbf9ff] p-8 mb-10 w-full">
        <h1 className="text-[#2b044d] Nui font-medium text-xl pb-2 border-b border-[#f0e9ff]">
          Category
        </h1>
        <p className="text-base text-[#888888] hover:text-[#8f1bdc] cursor-pointer Pop pt-8 pb-5 border-b border-[#f0e9ff]">
          Resaurant food (37)
        </p>
        <p className="text-base text-[#888888] hover:text-[#8f1bdc] cursor-pointer Pop pt-5 pb-5 border-b border-[#f0e9ff]">
          Travel news (10)
        </p>
        <p className="text-base text-[#888888] hover:text-[#8f1bdc] cursor-pointer Pop pt-5 pb-5 border-b border-[#f0e9ff]">
          Modern technology (03)
        </p>
        <p className="text-base text-[#888888] hover:text-[#8f1bdc] cursor-pointer Pop pt-5 pb-5 border-b border-[#f0e9ff]">
          Product (11)
        </p>
        <p className="text-base text-[#888888] hover:text-[#8f1bdc] cursor-pointer Pop pt-5 pb-5 border-b border-[#f0e9ff]">
          Inspiration 21
        </p>
        <p className="text-base text-[#888888] hover:text-[#8f1bdc] cursor-pointer Pop pt-5 pb-5 border-b border-[#f0e9ff]">
          Health Care (21) 09
        </p>
      </div>
      <div className="bg-[#fbf9ff] p-8 mb-10 w-full">
        <h1 className="text-[#2b044d] Nui font-medium text-xl mb-10 pb-2 border-b border-[#f0e9ff]">
          Recent Post
        </h1>
        <div className="flex mt-5 items-center gap-5">
          <img src={img1} alt="" />
          <div className="text-start">
            <h1 className="text-base text-[#2b044d] hover:text-[#8f1bdc] cursor-pointer Nui font-medium">
              From life was you fish...
            </h1>
            <p className="text-[#707b8e] text-sm Pop">January 12, 2019</p>
          </div>
        </div>
        <div className="flex mt-5 items-center gap-5">
          <img src={img2} alt="" />
          <div className="text-start">
            <h1 className="text-base text-[#2b044d] hover:text-[#8f1bdc] cursor-pointer Nui font-medium">
              The Amazing Hubble
            </h1>
            <p className="text-[#707b8e] text-sm Pop">02 Hours ago</p>
          </div>
        </div>
        <div className="flex mt-5 items-center gap-5">
          <img src={img3} alt="" />
          <div className="text-start">
            <h1 className="text-base text-[#2b044d] hover:text-[#8f1bdc] cursor-pointer Nui font-medium">
              02 Hours ago
            </h1>
            <p className="text-[#707b8e] text-sm Pop">03 Hours ago</p>
          </div>
        </div>
        <div className="flex mt-5 items-center gap-5">
          <img src={img4} alt="" />
          <div className="text-start">
            <h1 className="text-base text-[#2b044d] hover:text-[#8f1bdc] cursor-pointer Nui font-medium">
              Asteroids telescope
            </h1>
            <p className="text-[#707b8e] text-sm Pop">01 Hours ago</p>
          </div>
        </div>
      </div>

      <div className="bg-[#fbf9ff] p-8 mb-10 w-full">
        <h1 className="text-[#2b044d] Nui font-medium mb-10 text-xl pb-2 border-b border-[#f0e9ff]">
          Tag Clouds
        </h1>
        <button className="border border-[#eeeeee] bg-white py-1 px-5 text-[#888888] cursor-pointer mx-1 mb-2 text-[13px] Pop hover:text-white hover:bg-[#8f1bdc]">
          project
        </button>
        <button className="border border-[#eeeeee] bg-white py-1 px-5 text-[#888888] cursor-pointer mx-1 mb-2 text-[13px] Pop hover:text-white hover:bg-[#8f1bdc]">
          love
        </button>
        <button className="border border-[#eeeeee] bg-white py-1 px-5 text-[#888888] cursor-pointer mx-1 mb-2 text-[13px] Pop hover:text-white hover:bg-[#8f1bdc]">
          technology
        </button>
        <button className="border border-[#eeeeee] bg-white py-1 px-5 text-[#888888] cursor-pointer mx-1 mb-2 text-[13px] Pop hover:text-white hover:bg-[#8f1bdc]">
          travel
        </button>
        <button className="border border-[#eeeeee] bg-white py-1 px-5 text-[#888888] cursor-pointer mx-1 mb-2 text-[13px] Pop hover:text-white hover:bg-[#8f1bdc]">
          restaurant
        </button>
        <button className="border border-[#eeeeee] bg-white py-1 px-5 text-[#888888] cursor-pointer mx-1 mb-2 text-[13px] Pop hover:text-white hover:bg-[#8f1bdc]">
          life style
        </button>
        <button className="border border-[#eeeeee] bg-white py-1 px-5 text-[#888888] cursor-pointer mx-1 mb-2 text-[13px] Pop hover:text-white hover:bg-[#8f1bdc]">
          design
        </button>
        <button className="border border-[#eeeeee] bg-white py-1 px-5 text-[#888888] cursor-pointer mx-1 mb-2 text-[13px] Pop hover:text-white hover:bg-[#8f1bdc]">
          illustration
        </button>
      </div>
      <div className="bg-[#fbf9ff] p-8 mb-10 w-full">
        <h1 className="text-[#2b044d] Nui font-medium mb-10 text-xl pb-2 border-b border-[#f0e9ff]">
          Instagram Feeds
        </h1>
        <div className="flex gap-5">
          <img src={img5} className="mb-5" alt="" />
          <img src={img6} className="mb-5" alt="" />
          <img src={img7} className="mb-5" alt="" />
        </div>
        <div className="flex gap-5">
          <img src={img8} className="mb-5" alt="" />
          <img src={img9} className="mb-5" alt="" />
          <img src={img11} className="mb-5" alt="" />
        </div>
      </div>
      <div className="bg-[#fbf9ff] p-8 mb-10 w-full">
        <h1 className="text-[#2b044d] Nui font-medium mb-10 text-xl pb-2 border-b border-[#f0e9ff]">
          Newsletter
        </h1>
        <input
          type="text"
          placeholder="Enter Email"
          className="border-[#f0e9ff] outline-none border p-3 text-[#999999] text-sm w-full"
        />
        <button className="cursor-pointer py-5 text-sm tracking-widest bg-white hover:bg-[#8f1bdc] border-[#8f1bdc] w-full mt-5 Nui font-normal border text-[#8f1bdc] hover:text-white">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default Slider;
