import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { gsap } from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import FadeIn from "./motion/FadeIn";
gsap.registerPlugin(_ScrollTrigger);

function Card({ name, job, image, email, linkedin, github }) {
  return (
    <FadeIn className="profile bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm min-w-[250px]">
      {/* Card Header with Background */}
      <div className=" h-24 bg-gradient-to-tr from-primary to-secondary"></div>

      {/* Profile Section */}
      <div className="relative px-6 pb-6">
        {/* Circle Photo */}
        <div className="flex justify-center -mt-16 mb-4">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Name and Job */}
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
          <p className="text-gray-600 font-medium">{job}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default Card;
