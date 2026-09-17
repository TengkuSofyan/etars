import React from "react";
import imgVision1 from "/img/hand-toss.jpg";
import imgVision2 from "/img/two-people.jpg";
import { ImBullhorn } from "react-icons/im";
import { FaFlag } from "react-icons/fa";
import SlideInLeft from "@/components/motion/SlideInLeft";
import SlideInRight from "@/components/motion/SlideInRight";

function vision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_2fr_2fr_1fr] md:grid-rows-2 gap-4 lg:gap-4 py-12 px-4 overflow-x-hidden">
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
    </div>
  );
}

export default vision;
