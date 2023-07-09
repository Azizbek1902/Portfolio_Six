import { IoMdPaperPlane } from "react-icons/io";
import { RiWechatPayLine } from "react-icons/ri";
import { RiFileUserLine } from "react-icons/ri";
import React from "react";
import img0 from "../../../assets/images/shape/dot-bg.png";

function ServisesHeader({ active }) {
  const data1 = [
    {
      id: 1,
      img: <RiFileUserLine size={35} color="white" />,
      title: "Easily Manage",
    },
    {
      id: 2,
      img: <RiWechatPayLine size={35} color="white" />,
      title: "Get Payments Easily",
      active: true,
    },
    {
      id: 3,
      img: <IoMdPaperPlane size={35} color="white" />,
      title: "Quick Messaging",
    },
  ];
  const data = [
    {
      id: 1,
      img: <RiFileUserLine size={35} color="white" />,
      title: "Easily Manage",
    },
    {
      id: 2,
      img: <RiWechatPayLine size={35} color="white" />,
      title: "Get Payments Easily",
      active: true,
    },
    {
      id: 3,
      img: <IoMdPaperPlane size={35} color="white" />,
      title: "Quick Messaging",
    },
    {
      id: 4,
      img: <RiFileUserLine size={35} color="white" />,
      title: "Easily Manage",
    },
    {
      id: 5,
      img: <RiWechatPayLine size={35} color="white" />,
      title: "Get Payments Easily",
    },
    {
      id: 6,
      img: <IoMdPaperPlane size={35} color="white" />,
      title: "Quick Messaging",
    },
  ];
  return (
    <div>
      <div className="flex justify-center mt-20">
        <h1 className="text-center xl:w-[600px] leading-[60px] md:w-[80%] lg:w-[50%] text-[#2b044d] Nui xl:text-[50px] lg:text-[40px] text-3xl md:text-[50px] font-bold">
          How Can We HelpYour with Appco!
        </h1>
      </div>
      <div className="flex justify-center mt-24">
        <div className="w-[95%] md:w-[90%] xl:w-[1200px]">
          {active ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {data1.map((elem) => (
                <div
                  className={`text-center bg-white ${
                    elem.active ? "border border-[#835ef8] rounded-md" : ""
                  } hover:border hover:border-[#835ef8] rounded-md pt-24 px-10 pb-10 relative cart`}
                  key={elem.id}
                >
                  <div className="flex justify-center">
                    <img
                      src={img0}
                      className="absolute top-10 right-28 animatee"
                      alt=""
                    />
                    <div className="bg-[#E88CEA] imgg rounded-full p-10 z-20">
                      {elem.img}
                    </div>
                  </div>
                  <div className="text-center">
                    <h1 className="pt-8 text-[#2b044d] font-bold hover:text-[#835ef8] text-2xl Nui pb-10">
                      {elem.title}
                    </h1>
                    <p className="text-[#707b8e] Pop text-base font-normal pb-8">
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {data.map((elem) => (
                <div
                  className={`text-center bg-white ${
                    elem.active ? "border border-[#835ef8] rounded-md" : ""
                  } hover:border hover:border-[#835ef8] rounded-md pt-24 px-10 pb-10 relative cart`}
                  key={elem.id}
                >
                  <div className="flex justify-center">
                    <img
                      src={img0}
                      className="absolute top-10 right-28 animatee"
                      alt=""
                    />
                    <div className="bg-[#E88CEA] imgg rounded-full p-10 z-20">
                      {elem.img}
                    </div>
                  </div>
                  <div className="text-center">
                    <h1 className="pt-8 text-[#2b044d] font-bold hover:text-[#835ef8] text-2xl Nui pb-10">
                      {elem.title}
                    </h1>
                    <p className="text-[#707b8e] Pop text-base font-normal pb-8">
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServisesHeader;
