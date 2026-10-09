import React from "react";
import rig from "/img/rig.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import TaskCard from "./TaskCard";
import data from "../data";

function WeDoPage() {
  const { task } = data;
  return (
    <div className="px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto">
      <h1 className="text-[36px] md:text-4xl lg:text-5xl mt-12 font-outfit font-extrabold text-dark">What <span className="text-teal">We Do</span></h1>
      <div className="relative overflow-hidden rounded-2xl mt-4 md:mt-6 lg:mt-8 min-h-[400px] flex items-center justify-center p-6 md:p-10 lg:p-12">
        {/* Layer 0: Gambar Background */}
        <img
          src={rig}
          alt="background banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Layer 1: Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-teal/50 to-dark/40 z-10" />

        {/* Layer 2 (Paling Atas): Teks Utama (Di Tengah) */}
        <div className="relative z-20 text-center max-w-4xl text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-outfit mb-4">
            Overview
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight opacity-90 text-justify md:text-center">
            We develop and share practical learning resources through e-courses, seminars, technical discussions, and educational videos. We are also open to collaborating with industry professionals, organizations, and academic communities to exchange expertise, explore innovative ideas, and work together on technical challenges across the energy and oil and gas sectors.
          </p>

          {/* Un-comment jika ingin mengaktifkan tombol di masa mendatang */}
          {/* 
    <button className="mt-6 inline-flex items-center justify-center bg-white text-black px-5 py-2.5 rounded-md font-medium text-base lg:text-lg hover:bg-gray-100 transition-colors">
      Our Project
      <IoIosArrowDropdownCircle size={20} className="ml-2" />
    </button> 
    */}
        </div>
      </div>

      {/* Project Section */}
      <div className="mt-12 mb-8">
        <h2 className="font-outfit pb-2 text-dark text-[32px] md:text-3xl lg:text-4xl font-extrabold">
          Our <span className="text-teal">Project</span>
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {task.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              imageUrl={task.imageUrl}
              title={task.title}
              short_description={task.short_description}
              category={task.category}
              stack={task.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeDoPage;
