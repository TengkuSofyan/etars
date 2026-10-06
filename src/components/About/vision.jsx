import React from "react";
import imgVision from "/img/vision.jpg";
import imgMission from "/img/mission.jpg";
import { ImBullhorn } from "react-icons/im";
import { FaFlag } from "react-icons/fa";
import SlideInLeft from "@/components/motion/SlideInLeft";
import SlideInRight from "@/components/motion/SlideInRight";
import FadeIn from "../motion/FadeIn";

function vision() {
  return (
    <>
      <div className=" py-8 lg:py-16 w-full max-w-7xl px-4 md:px-6 lg:px-8 bg-gray-100">
        <h2 className='text-[32px] md:text-[34px] lg:text-[48px] font-extrabold text-dark text-center font-outfit'>Our Vision <span className='text-teal'>& Mission</span> </h2>

        <div className="grid grid-cols-1 grid-rows-4 gap-4 lg:grid-cols-4 lg:grid-rows-4 text-dark lg:mt-6">
          {/* kotak 1 */}
          <SlideInLeft className="hidden lg:block lg:row-span-2 lg:col-start-2 lg:row-start-1 rounded-2xl relative overflow-hidden">
            <img className="bg-cover h-full w-full" src={imgVision} />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal/40 to-teal/40" />
          </SlideInLeft>
          {/* kotak 2 */}
          <SlideInRight className="row-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-1 rounded-2xl flex flex-col lg:flex-row items-center justify-center bg-primary p-4 md:p-6 gap-4 order-1 lg:order-2 mt-4 lg:mt-0">
            <div className="flex items-center justify-center flex-col gap-1">
              <ImBullhorn className="w-12 h-12 text-soft" />
              <h2 className="font-bold text-soft text-[28px]">Mission</h2>
            </div>
            <div>
              <p className="text-md text-soft font-medium text-justify tracking-wider lg:tracking-tight">
                To bridge the gap between academia and the energy industry by turning theoretical knowledge into practical solutions. We are dedicated to supporting students through high-quality learning resources and partnering with industry to solve real-world challenges
              </p>
            </div>
          </SlideInRight>
          {/* kotak 3 */}
          <SlideInRight className="hidden lg:block lg:row-span-2 lg:col-start-3 lg:row-start-3 rounded-2xl relative overflow-hidden">
            <img className="bg-cover h-full w-full" src={imgMission} />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark/50 to-dark/50" />
          </SlideInRight>
          {/* kotak 4 */}
          <SlideInLeft className="row-span-2 row-start-3 lg:col-span-2 lg:col-start-1 lg:row-start-3 rounded-2xl bg-dark flex flex-col lg:flex-row items-center justify-center lg:p-6 gap-4 p-4">
            <div className="flex items-center justify-center flex-col gap-1">
              <FaFlag className="w-12 h-12 text-soft" />
              <h2 className="font-bold text-soft text-[28px]">Vision</h2>
            </div>
            <div>
              <p className="text-md text-soft font-medium text-justify tracking-tight">
                To be a leading, accessible hub for energy education where academic knowledge and industry practice seamlessly connect to advance the global energy sector
              </p>
            </div>
          </SlideInLeft>

          {/* <FadeIn className="col-start-1 row-start-2 bg-dark rounded-bl-2xl rounded-tr-2xl"></FadeIn>
          <FadeIn className="col-start-4 row-start-3 bg-primary rounded-tr-2xl rounded-bl-2xl"></FadeIn> */}
          {/* <div className="col-start-4 row-start-4 bg-primary rounded-br-2xl rounded-tl-2xl"></div>
          <div className="col-start-1 row-start-1 bg-dark rounded-tl-2xl rounded-br-2xl"></div> */}
        </div>
      </div>



    </>


  );
}

export default vision;
