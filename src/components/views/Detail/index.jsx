import { BiChevronRight } from "react-icons/bi"; 
import { BiChevronLeft } from "react-icons/bi"; 
import React from "react";
import img1 from "../../../assets/images/blog/single_blog_1.png";
import img2 from "../../../assets/images/blog/single_blog_2.png";
import img3 from "../../../assets/images/blog/single_blog_3.png";
import img4 from "../../../assets/images/blog/single_blog_4.png";
import img5 from "../../../assets/images/blog/single_blog_5.png";
import { FaComments } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

function Blogg() {
  const data = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
  ];
  return (
    <div>
      {data.map((elem) => (
        <div className="relative mb-14" key={elem.id}>
          <img src={elem.img} alt="" className="relative" />
          <div className="p-10 shadowBlog">
            <div className="hover:bg-transparent bg-[#8F1BDC] py-3 rounded-md w-24 absolute bottom-56">
              <h1 className="text-3xl font-semibold Nui text-white text-center hover:text-[#8F1BDC]">
                15 <p className="text-lg">Jan</p>
              </h1>
            </div>
            <h1 className="text-2xl text-[#2b044d] hover:text-[#8f1bdc]  Nui cursor-pointer font-semibold">Google inks pact for new 35-storey office</h1>
            <p className="text-base text-[#707b8e] Pop font-normal pt-5 leading-8">
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </p>
            <div className="flex mt-5 items-center gap-2">
              <BsFillPersonFill
                color="#999999"
                className="hover:text-[#8f1bdc] cursor-pointer"
                size={14}
              />
              <p className="hover:text-[#8f1bdc] cursor-pointer text-[#999999] text-sm Pop">
                Travel, Lifestyle
              </p>
              |
              <FaComments
                color="#999999"
                className="hover:text-[#8f1bdc] cursor-pointer"
                size={14}
              />
              <p className="hover:text-[#8f1bdc] cursor-pointer text-[#999999] text-sm Pop">
                03 Comments
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="mb-10 mt-28 flex justify-center gap-3">
          <button className="border border-[#f0e9ff] p-2 px-4 text-[#8a8a8a] cursor-pointer"><BiChevronLeft size={18}/></button>
          <button className="border border-[#f0e9ff] text-sm p-3 px-5 text-[#8a8a8a] cursor-pointer">1</button>
          <button className="border border-[#f0e9ff] text-sm p-3 px-5 text-[#8a8a8a] cursor-pointer bg-[#FBF9FF] hover:bg-white">2</button>
          <button className="border border-[#f0e9ff] p-2 px-4 text-[#8a8a8a] cursor-pointer"><BiChevronRight size={18}/></button>
      </div>
    </div>
  );
}

export default Blogg;
