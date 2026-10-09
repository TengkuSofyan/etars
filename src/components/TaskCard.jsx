import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import FadeIn from "./motion/FadeIn";
function TaskCard({ id, imageUrl, title, short_description, category, stack }) {
  return (
    <FadeIn
      className=" text-primary shadow-lg p-4 col-span-1 md:col-span-2 rounded-xl hover:scale-102 transition-transform duration-300"
      id={id}
    >
      <div className="h-[250px] w-full relative">
        <img src={imageUrl} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-tr from-teal/50 to-dark/40" />
      </div>
      <div className="mt-4">
        <Link key={id} to={`/we-do/${id}`}>
          <h3 className="text-2xl font-bold text-dark line-clamp-2">{title}</h3>
        </Link>
        <p className="mt-2 text-black line-clamp-3">{short_description}</p>
        <div className="mt-2">
          <p className="flex items-center justify- text-gray-600 font-medium">
            <BiSolidCategory size={20} className="mr-1" />
            Tags:{" "}
            {/* {category.map((data, index) => (
              <span key={index} className="ml-2">
                {data}
              </span>
            ))} */}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            {stack.map((data, index) => (
              <span key={index} className="bg-gray-400 text-slate-50 py-1 px-2 rounded-md tracking-tight">
                {data}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default TaskCard;
