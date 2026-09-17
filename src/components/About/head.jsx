import React from "react";
import discussImg from "/img/discussion.jpg";
import SlideInLeft from "@/components/motion/SlideInLeft";
import SlideInRight from "@/components/motion/SlideInRight";

function Head() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 grid-rows-1 gap-4 text-primary px-4 md:px-6 py-4 lg:px-8 md:py-[50px] max-w-[1280px]">
      <SlideInLeft className="md:col-span-4 order-2 lg:order-1 pt-4 md:pt-0 leading-snug">
        <h1 className="text-[32px] font-bold md:text-4xl lg:text-5xl gradient-text leading-snug md:leading-tight">
          Bridging Energy Expertise with Data Intelligence
        </h1>
        <p className="lg:pt-2 text-md lg:text-lg text-dark  font-normal mt-2 lg:mt-4 text-justify md:pr-6">
          We are an independent consulting and education group in the energy and
          oil & gas sector, combining technical expertise with data science and
          machine learning (ML) to deliver practial and innovative solutions.
        </p>

        <button className="bg-white border-2 border-primary  text-primary mt-4 rounded-md p-2 font-medium">
          Contact Us
        </button>
      </SlideInLeft>
      <SlideInRight className="w-full h-full relative rounded-xl overflow-hidden md:col-span-3 md:col-start-5 mt-4 md:mt-0 order-1 md:order-2">
        <img className="w-full h-full " src={discussImg} />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-secondary/50" />
      </SlideInRight>
    </div>
  );
}

export default Head;
