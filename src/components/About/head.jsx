import React from "react";
import bannerImg from "/img/banner.jpg";
import SlideInLeft from "@/components/motion/SlideInLeft";
import SlideInRight from "@/components/motion/SlideInRight";
import { FaArrowRight } from "react-icons/fa";

function Head() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 grid-rows-1 gap-4 text-primary px-4 md:px-6 pt-8 md:pt-16 lg:pt-20 lg:px-8 xl:pb-18 max-w-7xl">
      <SlideInLeft className="md:col-span-4 xl:col-span-3 order-1 pt-4 md:pt-0 leading-snug">
        <h1 className="text-[32px] font-outfit font-extrabold md:text-4xl lg:text-5xl text-dark leading-snug md:leading-tight">
          Bridging Energy Knowledge <span className="text-teal">&amp; Real-World</span> Practice
        </h1>
        <p className="lg:pt-2 text-md lg:text-lg text-dark  font-normal mt-2 lg:mt-1 text-justify md:pr-6">
          We are a nonprofit organization dedicated to advancing knowledge and innovation within the energy and oil & gas sectors. We believe that massive progress happens when fundamental academic theories meet real-world industry applications. Our goal is to bridge this gap—demonstrating how core engineering concepts can be applied to solve practical field problems, and ultimately contributing to the continuous development of energy sciences.
        </p>

        <button className="bg-teal border-2 border-soft rounded-full text-soft mt-4 p-4 font-medium flex items-center justify-between">
          Explore Solutions
          <span className="bg-soft rounded-full text-teal h-[20px] w-[20px] flex items-center justify-center p-1 ml-2">
            <FaArrowRight />
          </span>
        </button>
      </SlideInLeft>
      <SlideInRight className="w-full h-full relative rounded-xl overflow-hidden md:col-span-3 md:col-start-5 mt-4 md:mt-0 order-2">
        <img className="w-full h-full " src={bannerImg} />
        {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-secondary/50" /> */}
      </SlideInRight>
    </div>
  );
}

export default Head;
