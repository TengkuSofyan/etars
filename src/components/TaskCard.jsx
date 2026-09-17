import React from "react";
import { BiSolidCategory } from "react-icons/bi";
function TaskCard({ id, imageUrl, title, short_description, category, stack }) {
  return (
    <div
      className=" text-primary shadow-lg p-4 col-span-1 md:col-span-2 rounded-xl"
      id={id}
    >
      <div className="h-[250px] w-full relative">
        <img src={imageUrl} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40" />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-medium gradient-text">{title}</h3>
        <p className="mt-2 text-black">{short_description}</p>
        <div className="mt-2">
          <p className="flex items-center justify- text-gray-600 font-medium">
            <BiSolidCategory size={20} className="mr-1" />
            Category:{" "}
            {category.map((data, index) => (
              <span key={index} className="ml-2">
                {data}
              </span>
            ))}
          </p>
          <div className="mt-2">
            {stack.map((data, index) => (
              <span key={index} className="bg-gray-400 text-slate-50 py-1 px-2 rounded-md mr-2">
                {data}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
