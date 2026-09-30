import React from "react";
import imgVision2 from "/img/two-people.jpg";
import { ImBullhorn } from "react-icons/im";
import { FaFlag } from "react-icons/fa";
import SlideInLeft from "@/components/motion/SlideInLeft";
import SlideInRight from "@/components/motion/SlideInRight";
import FadeIn from "../motion/FadeIn";

function vision() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-4 gap-3 lg:gap-4 max-w-[1024px] px-4 md:px-6">
        <SlideInLeft className=" md:col-span-1 md:row-span-2 bg-primary flex items-center justify-center flex-col rounded-2xl order-1">
          <ImBullhorn className="w-12 h-12 " />
          <h2 className="font-bold text-[28px]">Our Mission </h2>
        </SlideInLeft>
        <SlideInLeft className="row-start-2 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-3 bg-primary flex items-center justify-center rounded-2xl order-2 p-4">
          <p className="text-md font-medium text-justify md:p-4">
            To bridge the gap between industry and education: solving real
            challenges for energy companies while empowering the next generation
            of engineers, scientists, and decision-makers through practical and
            high quality learning.
          </p>
        </SlideInLeft>
        <FadeIn className="col-span-2 row-span-2  col-start-2 row-start-1 relative overflow-hidden rounded-2xl hidden md:block md:max-h-[208px] lg:max-h-[210px]">
          <img
            src={imgVision2}
            className=" w-full h-full object-cover object-[center_10%] "
          />
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-secondary/50" /> */}
        </FadeIn>
        <SlideInRight className="row-start-3 md:row-span-2 md:col-start-4 md:row-start-1 text-soft bg-dark flex items-center justify-center flex-col rounded-2xl order-3">
          <FaFlag className="w-12 h-12" />
          <h2 className="font-bold text-[28px] ">Our Vision </h2>
        </SlideInRight>
        <SlideInRight className="row-start-4 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 bg-dark flex items-center justify-center rounded-2xl order-4 p-4">
          <p className="text-md text-soft font-medium text-justify md:p-4">
            To be recognised as a trusted partner for energy consulting and a
            leading hub for knowledge sharing, innovation, and education in the
            global energy landscape.
          </p>
        </SlideInRight>

      </div>


      {/* <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_2fr_2fr_1fr] md:grid-rows-2 gap-4 lg:gap-4 py-12 px-4 overflow-x-hidden max-w-[1024px]">
        <SlideInLeft className="md:col-start-1 bg-primary flex flex-col items-center justify-center py-4 px-3 rounded-xl order-1 md:col-span-2 lg:col-start-2 lg:col-span-1">
          <ImBullhorn className="w-12 h-12 " />
          <h2 className="font-bold text-[28px]">Our Mission </h2>
          <p className="text-md font-medium text-justify md:p-4">
            To bridge the gap between industry and education: solving real
            challenges for energy companies while empowering the next generation
            of engineers, scientists, and decision-makers through practical and
            high quality learning.
          </p>
        </SlideInLeft>

        <SlideInRight className="md:col-start-3 relative rounded-xl overflow-hidden order-2 md:col-span-2 lg:col-span-1">
          <img
            src={imgVision1}
            className="w-full h-full md:max-h-[300px] lg:max-h-none"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-secondary/50" />
        </SlideInRight>
        <SlideInLeft className="md:col-start-1 md:row-start-2 relative rounded-xl overflow-hidden order-4 md:order-3 md:col-span-2 lg:col-span-1 lg:col-start-2">
          <img
            src={imgVision2}
            className="w-full h-full md:max-h-[300px] lg:max-h-none"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-secondary/50" />
        </SlideInLeft>
        <SlideInRight className="md:col-start-3 md:row-start-2 bg-secondary text-gray-800 flex flex-col items-center justify-center px-3 py-4 rounded-xl order-3 md:order-4 md:col-span-2 lg:col-span-1 lg:col-start-3">
          <FaFlag className="w-12 h-12" />
          <h2 className="font-bold text-[28px]">Our Vision </h2>
          <p className="text-md font-medium text-justify md:p-4">
            To be recognised as a trusted partner for energy consulting and a
            leading hub for knowledge sharing, innovation, and education in the
            global energy landscape.
          </p>
        </SlideInRight>
      </div> */}

    </>


  );
}

export default vision;
