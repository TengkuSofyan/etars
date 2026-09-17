import React from "react";
import rig from "/img/rig.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import TaskCard from "./TaskCard";
import data from "../data";

function WeDoPage() {
  const { task } = data;
  return (
    <div className="px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto">
      <h1 className="text-6xl font-medium gradient-text mt-12">What We Do</h1>
      <div
        className="relative bg-cover bg-center h-[550px] mt-4 md:mt-6 lg:mt-8 overflow-hidden rounded-2xl "
        style={{
          backgroundImage: `url('${rig}')`,
        }}
      >
        <div className="absolute inset-0 bg-gray-800/40 p-4 md:flex justify-center items-center">
          <div className="text-left mt-2 ">
            <h2 className="text-3xl lg:text-5xl font-medium mb-8">
              <span className="border-b-3 border-white">Overview</span>
            </h2>
            <p className="text-lg lg:text-2xl font-medium">
              We support energy companies through consulting services mainly in
              reservoir engineering & simulation, Production forecasting &
              optimization, petrophysical analysis, and ML implementation in the
              oil and gas industry.
            </p>
            <p className="mt-2 text-lg lg:text-2xl font-medium">
              At the same time, we are committed to education-creating online
              classes, study cases, and accessible content to help students and
              professionals strngthen their knowledge in energy, oil & gas, and
              data-driven solutions.
            </p>
            <button className="text-black bg-white mt-4 rounded-md p-2 font-medium flex flex-row items-center justify-center lg:text-xl">
              Our Project
              <IoIosArrowDropdownCircle size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="mt-12 mb-8">
        <h2 className="text-primary pb-2 gradient-text text-5xl font-medium">
          Our Project
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {task.map((task) => (
            <TaskCard
              key={task.id}
              imageUrl={task.imageUrl}
              title={task.title}
              short_description={task.short_description}
              category={task.category}
              stack={task.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeDoPage;
