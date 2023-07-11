import { IoAirplane } from "react-icons/io";
import { BiRadioCircle } from "react-icons/bi";
import React from "react";
import img from "../../assets/images/elements/d.jpg";
import img1 from "../../assets/images/elements/f1.jpg";
import img2 from "../../assets/images/elements/f2.jpg";
import img3 from "../../assets/images/elements/f3.jpg";
import img4 from "../../assets/images/elements/f4.jpg";
import img5 from "../../assets/images/elements/f5.jpg";
import img6 from "../../assets/images/elements/f6.jpg";
import img7 from "../../assets/images/elements/f7.jpg";
import img8 from "../../assets/images/elements/f8.jpg";
import imgg1 from "../../assets/images/elements/g1.jpg";
import imgg2 from "../../assets/images/elements/g2.jpg";
import imgg3 from "../../assets/images/elements/g3.jpg";
import imgg4 from "../../assets/images/elements/g4.jpg";
import imgg5 from "../../assets/images/elements/g5.jpg";
import imgg6 from "../../assets/images/elements/g6.jpg";
import imgg7 from "../../assets/images/elements/g7.jpg";
import imgg8 from "../../assets/images/elements/g8.jpg";

function Element() {
  const data = [
    {
      id: 1,
      num: "01",
      img: img1,
      country: "Canada",
      visit: "645032",
      width: "80%",
      bgColor: "#6382e6",
    },
    {
      id: 2,
      num: "02",
      img: img2,
      country: "Canada",
      visit: " 645032",
      width: "30%",
      bgColor: "#e66686",
    },
    {
      id: 3,
      num: "03",
      img: img3,
      country: "Canada",
      visit: "645032",
      width: "50%",
      bgColor: "#f09359",
    },
    {
      id: 4,
      num: "04",
      img: img4,
      country: "Canada",
      visit: "645032",
      width: "60%",
      bgColor: "#73fbaf",
    },
    {
      id: 5,
      num: "05",
      img: img5,
      country: "Canada",
      visit: "645032",
      width: "40%",
      bgColor: "#73fbaf",
    },
    {
      id: 6,
      num: "06",
      img: img6,
      country: "Canada",
      visit: "645032",
      width: "70%",
      bgColor: "#6382e6",
    },
    {
      id: 7,
      num: "07",
      img: img7,
      country: "Canada",
      visit: "645032",
      width: "20%",
      bgColor: "#a367e7",
    },
    {
      id: 8,
      num: "08",
      img: img8,
      country: "Canada",
      visit: "645032",
      width: "60%",
      bgColor: "#e66686",
    },
  ];
  return (
    <div>
      <h1 className="text-center text-[#2b044d] text-[50px] font-bold mt-32 mb-20 Nui">
        Ouer Element​
      </h1>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1200px]">
          <h2 className="text-[#2b044d] text-2xl font-medium Nui">
            Text Sample
          </h2>
          <p className="text-[#707b8e] text-base font-normal Pop mt-5 leading-8 lg:pr-10">
            Every avid independent filmmaker has <b>Bold</b> about making that
            Italic interest documentary, or short film to show off their
            creative prowess. Many have great ideas and want to “wow”
            theSuperscript scene, or video renters with their big project. But
            once you have theSubscript “in the can” (no easy feat), how do you
            move from a <del>Strike</del> through of master DVDs with the
            <u>“Underline”</u> marked hand-written title inside a secondhand CD
            case, to a pile of cardboard boxes full of shiny new, retail-ready
            DVDs, with UPC barcodes and polywrap sitting on your doorstep? You
            need to create eye-popping artwork and have your project replicated.
            Using a reputable full service DVD Replication company like
            PacificDisc, Inc. to partner with is certainly a helpful option to
            ensure a professional end result, but to help with your DVD
            replication project, here are 4 easy steps to follow for good DVD
            replication results
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1170px] px-5 border-t border-[#eee] pt-20 mt-20">
          <h1 className="text-[#2b044d] text-2xl font-medium Nui">
            Sample Buttons
          </h1>
          <div className="mb-16">
            <div className="flex gap-5 flex-wrap mb-5 mt-10">
              <button className="tranzition hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-[#415094] bg-[#f9f9ff] hover:text-[#415094] hover:bg-white">
                Default
              </button>
              <button className="tranzition hover:border border border-[#222] hover:border-[#222] font-medium py-2 px-8 text-sm text-white bg-[#222] hover:text-[#222] hover:bg-white">
                Primary
              </button>
              <button className="tranzition hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 text-sm text-white bg-[#4cd3e3] hover:text-[#4cd3e3] hover:bg-white">
                Success
              </button>
              <button className="tranzition hover:border border border-[#38a4ff] hover:border-[#38a4ff] font-medium py-2 px-8 text-sm text-white bg-[#38a4ff] hover:text-[#38a4ff] hover:bg-white">
                Info
              </button>
              <button className="tranzition hover:border border border-[#f4e700] hover:border-[#f4e700] font-medium py-2 px-8 text-sm text-white bg-[#f4e700] hover:text-[#f4e700] hover:bg-white">
                Warning
              </button>
              <button className="tranzition hover:border border border-[#f44a40] hover:border-[#f44a40] font-medium py-2 px-8 text-sm text-white bg-[#f44a40] hover:text-[#f44a40] hover:bg-white">
                Danger
              </button>
              <button className="tranzition hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-[#415094] bg-[#f9f9ff] hover:text-[#415094] hover:bg-white">
                <u>Link</u>
              </button>
              <button
                className="tranzition cursor-not-allowed
             hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-white bg-[#f9f9ff] hover:text-[#f9f9ff]"
              >
                Disabled
              </button>
            </div>
            <div className="flex gap-5  flex-wrap mb-5">
              <button className="tranzition hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm hover:text-[#415094] hover:bg-[#f9f9ff] text-white bg-white">
                Default
              </button>
              <button className="tranzition hover:border border border-[#222] hover:border-[#222] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#222] text-[#222] bg-white">
                Primary
              </button>
              <button className="tranzition hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#4cd3e3] text-[#4cd3e3] bg-white">
                Success
              </button>
              <button className="tranzition hover:border border border-[#38a4ff] hover:border-[#38a4ff] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#38a4ff] text-[#38a4ff] bg-white">
                Info
              </button>
              <button className="tranzition hover:border border border-[#f4e700] hover:border-[#f4e700] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#f4e700] text-[#f4e700] bg-white">
                Warning
              </button>
              <button className="tranzition hover:border border border-[#f44a40] hover:border-[#f44a40] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#f44a40] text-[#f44a40] bg-white">
                Danger
              </button>
              <button className="tranzition hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-[#415094] hover:bg-[#f9f9ff] hover:text-[#415094] bg-white">
                <u>Link</u>
              </button>
              <button
                className="tranzition cursor-not-allowed
             hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-white bg-[#f9f9ff] hover:text-[#f9f9ff]"
              >
                Disabled
              </button>
            </div>
          </div>
          <div className="mb-16">
            <div className="flex gap-5  flex-wrap mb-5 mt-10">
              <button className="tranzition rounded-md hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-[#415094] bg-[#f9f9ff] hover:text-[#415094] hover:bg-white">
                Default
              </button>
              <button className="tranzition rounded-md hover:border border border-[#222] hover:border-[#222] font-medium py-2 px-8 text-sm text-white bg-[#222] hover:text-[#222] hover:bg-white">
                Primary
              </button>
              <button className="tranzition rounded-md hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 text-sm text-white bg-[#4cd3e3] hover:text-[#4cd3e3] hover:bg-white">
                Success
              </button>
              <button className="tranzition rounded-md hover:border border border-[#38a4ff] hover:border-[#38a4ff] font-medium py-2 px-8 text-sm text-white bg-[#38a4ff] hover:text-[#38a4ff] hover:bg-white">
                Info
              </button>
              <button className="tranzition rounded-md hover:border border border-[#f4e700] hover:border-[#f4e700] font-medium py-2 px-8 text-sm text-white bg-[#f4e700] hover:text-[#f4e700] hover:bg-white">
                Warning
              </button>
              <button className="tranzition rounded-md hover:border border border-[#f44a40] hover:border-[#f44a40] font-medium py-2 px-8 text-sm text-white bg-[#f44a40] hover:text-[#f44a40] hover:bg-white">
                Danger
              </button>
              <button className="tranzition rounded-md hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-[#415094] bg-[#f9f9ff] hover:text-[#415094] hover:bg-white">
                <u>Link</u>
              </button>
              <button
                className="tranzition rounded-md cursor-not-allowed
             hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-white bg-[#f9f9ff] hover:text-[#f9f9ff]"
              >
                Disabled
              </button>
            </div>
            <div className="flex gap-5  flex-wrap mb-5">
              <button className="tranzition rounded-md hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm hover:text-[#415094] hover:bg-[#f9f9ff] text-white bg-white">
                Default
              </button>
              <button className="tranzition rounded-md hover:border border border-[#222] hover:border-[#222] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#222] text-[#222] bg-white">
                Primary
              </button>
              <button className="tranzition rounded-md hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#4cd3e3] text-[#4cd3e3] bg-white">
                Success
              </button>
              <button className="tranzition rounded-md hover:border border border-[#38a4ff] hover:border-[#38a4ff] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#38a4ff] text-[#38a4ff] bg-white">
                Info
              </button>
              <button className="tranzition rounded-md hover:border border border-[#f4e700] hover:border-[#f4e700] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#f4e700] text-[#f4e700] bg-white">
                Warning
              </button>
              <button className="tranzition rounded-md hover:border border border-[#f44a40] hover:border-[#f44a40] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#f44a40] text-[#f44a40] bg-white">
                Danger
              </button>
              <button className="tranzition rounded-md hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-[#415094] hover:bg-[#f9f9ff] hover:text-[#415094] bg-white">
                <u>Link</u>
              </button>
              <button
                className="tranzition rounded-md cursor-not-allowed
             hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-white bg-[#f9f9ff] hover:text-[#f9f9ff]"
              >
                Disabled
              </button>
            </div>
          </div>
          <div className="mb-16">
            <div className="flex gap-5  flex-wrap mb-5 mt-10">
              <button className="tranzition rounded-3xl hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-[#415094] bg-[#f9f9ff] hover:text-[#415094] hover:bg-white">
                Default
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#222] hover:border-[#222] font-medium py-2 px-8 text-sm text-white bg-[#222] hover:text-[#222] hover:bg-white">
                Primary
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 text-sm text-white bg-[#4cd3e3] hover:text-[#4cd3e3] hover:bg-white">
                Success
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#38a4ff] hover:border-[#38a4ff] font-medium py-2 px-8 text-sm text-white bg-[#38a4ff] hover:text-[#38a4ff] hover:bg-white">
                Info
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f4e700] hover:border-[#f4e700] font-medium py-2 px-8 text-sm text-white bg-[#f4e700] hover:text-[#f4e700] hover:bg-white">
                Warning
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f44a40] hover:border-[#f44a40] font-medium py-2 px-8 text-sm text-white bg-[#f44a40] hover:text-[#f44a40] hover:bg-white">
                Danger
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-[#415094] bg-[#f9f9ff] hover:text-[#415094] hover:bg-white">
                <u>Link</u>
              </button>
              <button
                className="tranzition rounded-3xl cursor-not-allowed
             hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-white bg-[#f9f9ff] hover:text-[#f9f9ff]"
              >
                Disabled
              </button>
            </div>
            <div className="flex gap-5  flex-wrap mb-5">
              <button className="tranzition rounded-3xl hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm hover:text-[#415094] hover:bg-[#f9f9ff] text-white bg-white">
                Default
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#222] hover:border-[#222] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#222] text-[#222] bg-white">
                Primary
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#4cd3e3] text-[#4cd3e3] bg-white">
                Success
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#38a4ff] hover:border-[#38a4ff] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#38a4ff] text-[#38a4ff] bg-white">
                Info
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f4e700] hover:border-[#f4e700] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#f4e700] text-[#f4e700] bg-white">
                Warning
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f44a40] hover:border-[#f44a40] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#f44a40] text-[#f44a40] bg-white">
                Danger
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-[#415094] hover:bg-[#f9f9ff] hover:text-[#415094] bg-white">
                <u>Link</u>
              </button>
              <button
                className="tranzition rounded-3xl cursor-not-allowed
             hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 text-sm text-white bg-[#f9f9ff] hover:text-[#f9f9ff]"
              >
                Disabled
              </button>
            </div>
          </div>
          <div className="mb-16">
            <div className="flex gap-5  flex-wrap mb-5 mt-10">
              <button className="tranzition rounded-3xl hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 pr-10 text-sm text-[#415094] bg-[#f9f9ff] hover:text-[#415094] hover:bg-white">
                Default
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#222] hover:border-[#222] font-medium py-2 px-8 pr-10 text-sm text-white bg-[#222] hover:text-[#222] hover:bg-white">
                Primary
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 pr-10 text-sm text-white bg-[#4cd3e3] hover:text-[#4cd3e3] hover:bg-white">
                Success
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#38a4ff] hover:border-[#38a4ff] font-medium py-2 px-8 pr-10 text-sm text-white bg-[#38a4ff] hover:text-[#38a4ff] hover:bg-white">
                Info
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f4e700] hover:border-[#f4e700] font-medium py-2 px-8 pr-10 text-sm text-white bg-[#f4e700] hover:text-[#f4e700] hover:bg-white">
                Warning
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f44a40] hover:border-[#f44a40] font-medium py-2 px-8 pr-10 text-sm text-white bg-[#f44a40] hover:text-[#f44a40] hover:bg-white">
                Danger
              </button>
            </div>
            <div className="flex gap-5  flex-wrap mb-5">
              <button className="tranzition rounded-3xl hover:border border border-[#f9f9ff] hover:border-[#f9f9ff] font-medium py-2 px-8 pr-10 text-sm hover:text-[#415094] hover:bg-[#f9f9ff] text-white bg-white">
                Default
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#222] hover:border-[#222] font-medium py-2 px-8 pr-10 text-sm hover:text-white hover:bg-[#222] text-[#222] bg-white">
                Primary
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 pr-10 text-sm hover:text-white hover:bg-[#4cd3e3] text-[#4cd3e3] bg-white">
                Success
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#38a4ff] hover:border-[#38a4ff] font-medium py-2 px-8 pr-10 text-sm hover:text-white hover:bg-[#38a4ff] text-[#38a4ff] bg-white">
                Info
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f4e700] hover:border-[#f4e700] font-medium py-2 px-8 pr-10 text-sm hover:text-white hover:bg-[#f4e700] text-[#f4e700] bg-white">
                Warning
              </button>
              <button className="tranzition rounded-3xl hover:border border border-[#f44a40] hover:border-[#f44a40] font-medium py-2 px-8 pr-10 text-sm hover:text-white hover:bg-[#f44a40] text-[#f44a40] bg-white">
                Danger
              </button>
            </div>
          </div>
          <div className="mb-16">
            <div className="flex gap-5  flex-wrap mb-5 mt-10 items-center">
              <button className="tranzition hover:border border border-[#222] hover:border-[#222] font-medium py-5 px-8 text-sm text-white bg-[#222] hover:text-[#222] hover:bg-white">
                Extra Large
              </button>
              <button className="tranzition hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-4 px-8 text-sm text-white bg-[#4cd3e3] hover:text-[#4cd3e3] hover:bg-white">
                Large
              </button>
              <button className="tranzition hover:border border border-[#222] hover:border-[#222] font-medium py-3 px-8 text-sm text-white bg-[#222] hover:text-[#222] hover:bg-white">
                Default
              </button>
              <button className="tranzition hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 text-sm text-white bg-[#4cd3e3] hover:text-[#4cd3e3] hover:bg-white">
                Meduim
              </button>
              <button className="tranzition hover:border border border-[#222] hover:border-[#222] font-medium py-1 px-8 text-sm text-white bg-[#222] hover:text-[#222] hover:bg-white">
                Small
              </button>
            </div>
            <div className="flex gap-5  flex-wrap mb-5 mt-10 items-center border-b border-[#eee] pb-20">
              <button className="tranzition hover:border border border-[#222] hover:border-[#222] font-medium py-5 px-8 text-sm hover:text-white hover:bg-[#222] text-[#222] bg-white">
                Extra Large
              </button>
              <button className="tranzition hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-4 px-8 text-sm hover:text-white hover:bg-[#4cd3e3] text-[#4cd3e3] bg-white">
                Large
              </button>
              <button className="tranzition hover:border border border-[#222] hover:border-[#222] font-medium py-3 px-8 text-sm hover:text-white hover:bg-[#222] text-[#222] bg-white">
                Default
              </button>
              <button className="tranzition hover:border border border-[#4cd3e3] hover:border-[#4cd3e3] font-medium py-2 px-8 text-sm hover:text-white hover:bg-[#4cd3e3] text-[#4cd3e3] bg-white">
                Meduim
              </button>
              <button className="tranzition hover:border border border-[#222] hover:border-[#222] font-medium py-1 px-8 text-sm hover:text-white hover:bg-[#222] text-[#222] bg-white">
                Small
              </button>
            </div>
          </div>
          <h1 className="text-[#2b044d] font-medium Nui text-[28px]">
            Left Aligned
          </h1>
          <div className="flex gap-10 flex-col lg:flex-row border-b border-[#eee] pb-16 pt-8 items-start">
            <img src={img} alt="" />
            <p className="text-start text-base leading-8 text-[#707b8e] Pop font-normal">
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks such as Party
              Gaming and PlayTech left the United States. Overnight, online
              casino players found themselves being chased by the Federal
              government. But, after a fortnight, the online casino industry
              came up with a solution and new online casinos started taking
              root. These began to operate under a different business umbrella,
              and by doing that, rendered the transfer of money to and from them
              legal. A major part of this was enlisting electronic banking
              systems that would accept this new clarification and start doing
              business with me. Listed in this article are the electronic
              banking systems that accept players from the United States that
              wish to play in online casinos.
            </p>
          </div>
          <h1 className="text-[#2b044d] font-medium Nui pt-10 text-[28px] text-right">
            Right Aligned
          </h1>
          <div className="flex gap-10 flex-col lg:flex-row border-b border-[#eee] pb-16 pt-8 items-start">
            <p className="text-end text-base leading-8 text-[#707b8e] Pop font-normal">
              Over time, even the most sophisticated, memory packed computer can
              begin to run slow if we don’t do something to prevent it. The
              reason why has less to do with how computers are made and how they
              age and more to do with the way we use them. You see, all of the
              daily tasks that we do on our PC from running programs to
              downloading and deleting software can make our computer sluggish.
              To keep this from happening, you need to understand the reasons
              why your PC is getting slower and do something to keep your PC
              running at its best. You can do this through regular maintenance
              and PC performance optimization programs Before we discuss all of
              the things that could be affecting your PC’s performance, let’s
              talk a little about what symptoms
            </p>
            <img src={img} alt="" />
          </div>
          <h1 className="text-[#2b044d] font-medium Nui pt-10 text-[28px] text-start">
            Definition
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 pt-5 border-b border-[#eee] pb-20">
            <div className="text-start">
              <h1 className="text-2xl Nui font-medium text-[#2b044d] pb-5">
                Definition 01
              </h1>
              <p className="font-normal text-base text-[#707b8e] Pop leading-7">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
            <div className="text-start">
              <h1 className="text-2xl Nui font-medium text-[#2b044d] pb-5">
                Definition 02
              </h1>
              <p className="font-normal text-base text-[#707b8e] Pop leading-7">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
            <div className="text-start">
              <h1 className="text-2xl Nui font-medium text-[#2b044d] pb-5">
                Definition 03
              </h1>
              <p className="font-normal text-base text-[#707b8e] Pop leading-7">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
          </div>
          <h1 className="text-[#2b044d] font-medium Nui pt-10 text-[28px] text-start">
            Block Quotes
          </h1>
          <div className="p-10 bg-[#f9f9ff] border-l-2 border-black mt-10 mb-20">
            <p className="text-base text-[#212529] Pop">
              “Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks such as Party
              Gaming and PlayTech left the United States. Overnight, online
              casino players found themselves being chased by the Federal
              government. But, after a fortnight, the online casino industry
              came up with a solution and new online casinos started taking
              root. These began to operate under a different business umbrella,
              and by doing that, rendered the transfer of money to and from them
              legal. A major part of this was enlisting electronic banking
              systems that would accept this new clarification and start doing
              business with me. Listed in this article are the electronic
              banking”
            </p>
          </div>
          <h1 className="text-[#2b044d] font-medium Nui pt-10 text-[28px] text-start border-t border-[#eee]">
            Table
          </h1>
          <div className="bg-[#f9f9ff] mb-20 mt-10  w-full lllll">
            <div className="grid grid-cols-12 p-3 pb-5 px-10">
              <div className="col-span-1">
                <h1 className="text-base text-[#415094] Pop font-medium">#</h1>
              </div>
              <div className="col-span-4">
                <h1 className="text-base text-[#415094] Pop font-medium">
                  COUNTRIES
                </h1>
              </div>
              <div className="col-span-3">
                <h1 className="text-base text-[#415094] Pop font-medium">
                  VISITS
                </h1>
              </div>
              <div className="col-span-4">
                <h1 className="text-base text-[#415094] Pop font-medium">
                  PERCENTAGES
                </h1>
              </div>
            </div>
            {data.map((elem) => (
              <div
                className="grid grid-cols-12 items-center border-t border-[#edf3fd] py-5 px-10 "
                key={elem.id}
              >
                <div className="col-span-1 col-span-padding">
                  <h1 className="text-base text-[##212529] Pop font-medium">
                    {elem.num}
                  </h1>
                </div>
                <div className="col-span-4 col-span-padding flex items-center gap-5">
                  <img src={elem.img} alt="" />
                  <h1 className="text-base text-[#212529] Pop font-medium">
                    {elem.country}
                  </h1>
                </div>
                <div className="col-span-3 col-span-padding">
                  <h1 className="text-base text-[#212529] Pop font-medium">
                    {elem.visit}
                  </h1>
                </div>
                <div className="col-span-4 col-span-padding">
                  <div
                    style={{ width: elem.width, backgroundColor: elem.bgColor }}
                    className="h-1"
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-[#2b044d] font-medium Nui pt-10 text-[28px] text-start border-t border-[#eee]">
            Image Gallery
          </h1>
          <div className="grid grid-cols-1 md:gap-7 mt-10 md:grid-cols-3">
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-52 md:mb-0 mb-10 bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${imgg1})` }}
            ></div>
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-52 md:mb-0 mb-10 bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${imgg2})` }}
            ></div>
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-52 md:mb-0 mb-10 bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${imgg3})` }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:gap-7 mt-10 md:grid-cols-2">
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-52 md:mb-0 mb-10 bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${imgg4})` }}
            ></div>
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-52 md:mb-0 mb-10 bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${imgg5})` }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:gap-7 mt-10 md:grid-cols-3">
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-52 md:mb-0 mb-10 bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${imgg6})` }}
            ></div>
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-52 md:mb-0 mb-10 bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${imgg7})` }}
            ></div>
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-52 md:mb-0 mb-10 bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${imgg8})` }}
            ></div>
          </div>
          <div className="grid md:gap-6 lg:gap-10 grid-cols-1 md:grid-cols-3 border-t border-[#eee] pt-10 mt-16">
            <div className="text-start">
              <h1 className="pb-5 text-[28px] text-[#2b044d] Nui font-medium">
                Image Gallery
              </h1>
              <p className="text-[40px] text-[#828bb2] font-medium Nui">
                This is header 01
              </p>
              <p className="text-[32px] text-[#828bb2] font-medium Nui">
                This is header 02
              </p>
              <p className="text-[28px] text-[#828bb2] font-medium Nui">
                This is header 03
              </p>
              <p className="text-[24px] text-[#828bb2] font-medium Nui">
                This is header 04
              </p>
              <p className="text-[20px] text-[#828bb2] font-medium Nui">
                This is header 01
              </p>
              <p className="text-[16px] text-[#828bb2] font-medium Nui">
                This is header 01
              </p>
            </div>
            <div className="text-start">
              <h1 className="pb-5 text-[28px] text-[#2b044d] Nui font-medium">
                Unordered List
              </h1>
              <p className="text-base flex gap-2 items-center text-[#212529] font-normal leading-7 Pop">
                <BiRadioCircle size={24} color="212529" />
                Fta Keys
              </p>
              <p className="text-base flex gap-2 items-center text-[#212529] font-normal leading-7 Pop">
                <BiRadioCircle size={24} color="212529" />
                For Women Only Your Computer Usage
              </p>
              <p className="text-base flex gap-2 items-center text-[#212529] font-normal leading-7 Pop">
                <BiRadioCircle size={24} color="212529" />
                Facts Why Inkjet Printing Is Very Appealing
              </p>
              <p className="text-base flex gap-2 items-center justify-end text-[#212529] font-normal leading-7 Pop">
                <BiRadioCircle size={24} color="212529" />
                Addiction When Gambling Becomes
              </p>
              <p className="text-base flex gap-2 items-center justify-center text-[#212529] font-normal leading-7 Pop">
                <BiRadioCircle size={24} color="212529" />
                Protective Preventative
              </p>
              <p className="text-base flex gap-2 items-center text-[#212529] font-normal leading-7 Pop">
                Maintenance
              </p>
              <p className="text-base flex gap-2 items-center text-[#212529] font-normal leading-7 Pop">
                <BiRadioCircle size={24} color="212529" />
                Dealing With Technical Support 10 Useful
              </p>
              <p className="text-base flex gap-2 items-center text-[#212529] font-normal leading-7 Pop">
                Tips
              </p>
              <p className="text-base flex gap-2 items-center text-[#212529] font-normal leading-7 Pop">
                <BiRadioCircle size={24} color="212529" />
                Make Myspace Your Best Designed Space
              </p>
              <p className="text-base flex gap-2 items-center text-[#212529] font-normal leading-7 Pop">
                <BiRadioCircle size={24} color="212529" />
                Cleaning And Organizing Your Computer
              </p>
            </div>
            <div className="text-start">
              <h1 className="pb-5 text-[28px] text-[#2b044d] Nui font-medium">
                Ordered List
              </h1>
              <p className="text-base pl-10 flex gap-2 items-center text-[#828bb2] font-light leading-7 Pop">
                <p className="font-medium text-[#222]">01</p>
                Fta Keys
              </p>
              <p className="text-base pl-10 flex gap-2 items-center text-[#828bb2] font-light leading-7 Pop">
                <p className="font-medium text-[#222]">02</p>
                For Women Only Your Computer Usage
              </p>
              <p className="text-base pl-10 flex gap-2 items-center text-[#828bb2] font-light leading-7 Pop">
                <p className="font-medium text-[#222]">03</p>
                Facts Why Inkjet Printing Is Very Appealing
              </p>
              <p className="text-base pl-20 flex gap-2 items-start justify-end text-[#828bb2] font-light leading-7 Pop">
                <p className="font-medium text-[#222]">a</p>
                Addiction When Gambling Becomes
              </p>
              <p className="text-base pl-10 flex gap-2 items-center justify-end text-[#828bb2] font-light leading-7 Pop">
                <p className="font-medium text-[#222]">i</p>
                Protective
              </p>
              <p className="text-base pl-10 flex gap-2 items-center justify-end text-[#828bb2] font-light leading-7 Pop">
                Preventative
              </p>
              <p className="text-base pl-10 flex gap-2 items-center justify-end text-[#828bb2] font-light leading-7 Pop">
                Maintenance
              </p>
              <p className="text-base pl-10 flex gap-2 items-center justify-end text-[#828bb2] font-light leading-7 Pop">
                <p className="font-medium text-[#222]">04</p>
                Dealing With Technical Support 10 Useful Tips
              </p>
              <p className="text-base pl-10 flex gap-2 items-center justify-end text-[#828bb2] font-light leading-7 Pop">
                <p className="font-medium text-[#222]">05</p>
                Make Myspace Your Best Designed Space
              </p>
              <p className="text-base pl-10 flex gap-2 items-center justify-end text-[#828bb2] font-light leading-7 Pop">
                <p className="font-medium text-[#222]">06</p>
                Cleaning And Organizing Your Computer
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:gap-7 md:grid-cols-10 mt-20 border-t border-[#eee] pt-16">
            <div className="w-full md:col-span-7">
              <h1 className="text-[28px] text-[#2b044d] Nui font-medium mb-5">
                Form Element
              </h1>
              <input
                type="text"
                placeholder="First Name"
                className="py-2 px-4 bg-[#f9f9ff] outline-none w-full Nui placeholder:text-black text-lg mb-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="py-2 px-4 bg-[#f9f9ff] outline-none w-full Nui placeholder:text-black text-lg mb-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="py-2 px-4 bg-[#f9f9ff] outline-none w-full Nui placeholder:text-black text-lg mb-2"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="py-2 px-4 bg-[#f9f9ff] outline-none w-full Nui placeholder:text-black text-lg mb-2"
              />
              <input
                type="text"
                placeholder="Address"
                className="py-2 px-10 bg-[#f9f9ff] outline-none w-full Nui placeholder:text-black text-lg mb-2"
              />
              <select
                id="countries"
                class="bg-[#f9f9ff] outline-none mb-2 text-gray-900 text-lg Nui block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>🛬 City</option>
                <option value="US">Dhaka</option>
                <option value="CA">Dili</option>
                <option value="FR">NewYork</option>
                <option value="DE">Islamabad</option>
              </select>
              <select
                id="countries"
                class="bg-[#f9f9ff] outline-none mb-2 text-gray-900 text-lg Nui block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>🌐 England</option>
                <option value="US">Country</option>
                <option value="CA">Bangladesh</option>
                <option value="FR">India</option>
                <option value="DE">England</option>
                <option value="DE">Srilanka</option>
              </select>
              <textarea
                type="text"
                placeholder="Message"
                className="py-2 px-4 bg-[#f9f9ff] outline-none w-full Nui placeholder:text-black text-lg mb-2"
                cols="50"
              ></textarea>
              <input
                type="text"
                placeholder="Primary color"
                className="py-2 px-4 bg-[#f9f9ff] w-full Nui placeholder:text-black text-lg mb-2"
              />
              <input
                type="text"
                placeholder="Accent color"
                className="py-2 px-4 bg-[#f9f9ff] outline-none focus:border focus:border-[#eb6b55] w-full Nui placeholder:text-black text-lg mb-2"
              />
              <input
                type="text"
                placeholder="Secondary color"
                className="py-2 px-4 bg-[#f9f9ff] outline-none focus:border focus:border-[#eb6b55] w-full Nui placeholder:text-black text-lg mb-2"
              />
            </div>
            <div className="w-full md:col-span-3">
              <h1 className="text-[28px] text-[#2b044d] Nui font-medium mb-5">
                Switches
              </h1>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  01. Sample Switch
                </h1>
                <div className="primary-switch">
                  <input type="checkbox" id="default-switch" />
                  <label for="default-switch"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  02. Primary Color Switch
                </h1>
                <div className="primary-switch">
                  <input type="checkbox" id="primary-switch" checked />
                  <label for="primary-switch"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  03. Confirm Color Switch
                </h1>
                <div className="confirm-switch">
                  <input type="checkbox" id="confirm-switch" checked />
                  <label for="confirm-switch"></label>
                </div>
              </div>
              <h1 className="text-[28px] text-[#2b044d] Nui font-medium mb-5">
                Selectboxes
              </h1>
              <select
                id="countries"
                class="bg-[#f9f9ff] outline-none mb-8 text-gray-900 text-lg Nui block  pl-3 pr-8 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Portugalies</option>
                <option value="US">English</option>
                <option value="CA">Spanish</option>
                <option value="FR">Arabic</option>
                <option value="DE">England</option>
                <option value="DE">Bengali</option>
              </select>
              <h1 className="text-[28px] text-[#2b044d] Nui font-medium mb-5">
                Checkboxes
              </h1>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  01. Sample Checkbox
                </h1>
                <div class="primary-checkbox">
                  <input type="checkbox" id="default-checkbox" />
                  <label for="default-checkbox"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  02. Primary Color Checkbox
                </h1>
                <div class="primary-checkbox">
                  <input type="checkbox" id="default-checkbox" checked />
                  <label for="default-checkbox"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  03. Confirm Color Checkbox
                </h1>
                <div class="primary-checkbox">
                  <input type="checkbox" id="default-checkbox" />
                  <label for="default-checkbox"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  04. Disabled Checkbox
                </h1>
                <div class="primary-checkbox cursor-not-allowed">
                  <input type="checkbox" id="default-checkbox" disabled />
                  <label for="default-checkbox"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  05. Disabled Checkbox active
                </h1>
                <div class="primary-checkbox cursor-not-allowed">
                  <input type="checkbox" id="default-checkbox" checked />
                  <label for="default-checkbox"></label>
                </div>
              </div>

              <h1 className="text-[28px] text-[#2b044d] Nui font-medium mb-5">
                Radios
              </h1>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  01. Sample radio
                </h1>
                <div class="primary-radio">
                  <input type="checkbox" id="default-radio" />
                  <label for="default-radio"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  02. Primary Color radio
                </h1>
                <div class="primary-radio">
                  <input type="checkbox" id="default-radio" checked />
                  <label for="default-radio"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                03. Confirm Color radio
                </h1>
                <div class="primary-radio">
                  <input type="checkbox" id="default-radio" checked />
                  <label for="default-radio"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  04. Disabled radio
                </h1>
                <div class="primary-radio">
                  <input
                    type="checkbox"
                    id="default-radio"
                    className="cursor-not-allowed"
                    disabled
                  />
                  <label for="default-radio"></label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <h1 className="text-[#707b8e] text-base font-normal Pop">
                  05. Disabled radio active
                </h1>
                <div class="primary-radio">
                  <input
                    type="checkbox"
                    id="default-radio"
                    className="cursor-not-allowed"
                    disabled
                    checked
                  />
                  <label for="default-radio"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Element;
