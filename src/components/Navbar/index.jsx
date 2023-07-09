import { IoIosMenu } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/images/logo/logo.png";
import DropDown from "../Dropdown";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const windowHeight = window.innerHeight;

  const hamburger = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };

  if (deviceWidth > 994) {
    return (
      <div className="flex justify-center bg-[#F4FEFF] ">
        <div className="w-[95%] md:w-[90%] xl:w-[1200px]">
          <div
            className={`w-full flex items-center bg-[#F4FEFF] h-[80px] ${
              scrollPosition > windowHeight
                ? "fixed top-0 left-0 z-50 px-[150px] shadow-md bg-white"
                : null
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <img src={img} alt="" />
              <div className="flex gap-4 text-[#645f88bf] items-center text-[16px]">
                <div className="">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "navLi active text-base  text-[#450b78] Pop"
                        : " text-base  text-[#450b78] Pop"
                    }
                    to={"/"}
                  >
                    <p className="navlink">Home</p>
                  </NavLink>
                </div>
                <div className=" ">
                  <NavLink
                    className="text-base navLi  text-[#450b78]  Pop"
                    to={"/feature"}
                  >
                    <p className="navlink">Feature</p>
                  </NavLink>
                </div>
                <div className=" ">
                  <NavLink
                    className="text-base navLi  text-[#450b78]  Pop"
                    to={"/services"}
                  >
                    <p className="navlink">Services</p>
                  </NavLink>
                </div>
                <div className=" ">
                  <NavLink
                    className="text-base navLi  text-[#450b78]  Pop"
                    to={"/pricing"}
                  >
                    <p className="navlink">Pricing</p>
                  </NavLink>
                </div>
                <div className=" ">
                  <div className="text-base navLi  text-[#450b78]  Pop">
                    <p className="navlink">
                      <DropDown />
                    </p>
                  </div>
                </div>
                <div className=" ">
                  <NavLink
                    className="text-base navLi  text-[#450b78]  Pop"
                    to={"/contact"}
                  >
                    <p className="navlink">Contact</p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`z-[${9 ** 999}] px-[120px] w-full bg-[#F4FEFF] ${
          deviceWidth < 640
            ? "px-[20px] bg-[#F4FEFF]"
            : "px-[50px] bg-[#F4FEFF]"
        } ${
          scrollPosition > windowHeight ? "fixed top-0 z-50 bg-white" : null
        }`}
      >
        <div
          className={`w-full flex z-50 items-center h-[70px] bg-[#F4FEFF] ${
            scrollPosition > windowHeight
              ? "fixed left-0 px-[50px] top-0 z-50 bg-white"
              : null
          }`}
        >
          <div className="flex justify-between w-full">
            <img src={img} alt="" />
          </div>
          <button
            onClick={() => hamburger()}
            className="border-[1px] text-[#450b78] text-[35px] rounded-sm"
          >
            <IoIosMenu />
          </button>
        </div>
        {isOpened ? (
          <div className={`w-full bg-white py-2 border-t-[1px]`}>
            <div className="text-[#645f88bf] text-[16px]">
              <div className="">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "navLi active text-base  text-[#450b78] Pop"
                      : " text-base  text-[#450b78] Pop"
                  }
                  to={"/"}
                >
                  <p className="navlink">Home</p>
                </NavLink>
              </div>
              <div className=" ">
                <NavLink
                  className="text-base navLi  text-[#450b78]  Pop"
                  to={"/feature"}
                >
                  <p className="navlink">Feature</p>
                </NavLink>
              </div>
              <div className=" ">
                <NavLink
                  className="text-base navLi  text-[#450b78]  Pop"
                  to={"/services"}
                >
                  <p className="navlink">Services</p>
                </NavLink>
              </div>
              <div className=" ">
                <NavLink
                  className="text-base navLi  text-[#450b78]  Pop"
                  to={"/pricing"}
                >
                  <p className="navlink">Pricing</p>
                </NavLink>
              </div>
              <div className=" ">
                <NavLink
                  className="text-base navLi  text-[#450b78]  Pop"
                  to={"/blog"}
                >
                  <p className="navlink">
                    <DropDown />
                  </p>
                </NavLink>
              </div>
              <div className=" ">
                <NavLink
                  className="text-base navLi  text-[#450b78]  Pop"
                  to={"/contact"}
                >
                  <p className="navlink">Contact</p>
                </NavLink>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

export default Navbar;
