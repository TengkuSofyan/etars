// src/components/ParallaxBanner.jsx
import React, { useEffect, useRef } from "react";
import img from "/img/banner.jpg";
const ParallaxBanner = () => {
  //   const bannerRef = useRef(null);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (bannerRef.current) {
  //         const scrollPosition = window.scrollY;
  //         // Adjust the background position based on scroll
  //         bannerRef.current.style.backgroundPositionY = `${
  //           scrollPosition * 0.0001
  //         }px`;
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  return (
    <div
      className="relative bg-cover bg-center h-[550px]"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      <div className="absolute inset-0 bg-gray-800/75 flex items-center justify-center md:justify-start lg:justify-center">
        <div className="text-center text-white px-4 md:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glitch  flex flex-col">
            <span className="glitch" data-text="We are shaping the Future">
              We are shaping the Future
            </span>
            <span className="glitch" data-text="of Energy & Learning">
              of Energy & Learning
            </span>
            {/* We are shaping the Future of Energy & Learning */}
          </h1>
          <p className="text-xl md:text-2xl mt-8 font-medium">
            Your Trusted Partner in Growth and Innovation
          </p>
          <div className="w-[100px] h-[7px] bg-white mt-6 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBanner;
