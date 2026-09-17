import React from "react";
import stickImg from "/img/stick-note.jpg";
import discussImg from "/img/discussion.jpg";
function About() {
  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-4 mt-[50px] text-center px-4 max-w-[1024px] mx-auto">
      <div className="card-shadow rounded-xl p-4 col-span-2 text-left">
        <h2 className="font-bold text-4xl pb-2 border-b-4 border-sky-800 ">
          About Us
        </h2>
        <p className="pt-2 text-md font-medium text-primary">
          We are an independent consulting and education group in the energy and
          oil & gas sector, combining technical expertise with data science and
          machine learning (ML) to deliver practial and innovative solutions
        </p>
      </div>

      <div
        className="bg-sky-400 col-span-4 col-start-3 rounded-xl bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url('${discussImg}')` }}
      >
        <div className="absolute inset-0 bg-gray-800/55"></div>
      </div>

      <div className="card-shadow rounded-xl p-4 col-span-4 row-start-2 flex items-start justify-center flex-col">
        <h2 className="font-bold text-4xl pb-2 border-b-4 border-sky-800 ">
          What We Do
        </h2>
        <div className="text-left mt-2 ">
          <p className="text-md font-medium">
            We support energy companies through consulting services mainly in
            reservoir engineering & simulation, Production forecasting &
            optimization, petrophysical analysis, and ML implementation in the
            oil and gas industry.
          </p>
          <p className="mt-2 text-md font-medium">
            At the same time, we are committed to education-creating online
            classes, study cases, and accessible content to help students and
            professionals strngthen their knowledge in energy, oil & gas, and
            data-driven solutions.
          </p>
        </div>
      </div>

      {/* image 2 */}
      <div
        className="col-span-2 row-span-2 col-start-5 row-start-2 rounded-xl bg-cover  bg-right relative overflow-hidden"
        style={{ backgroundImage: `url('${stickImg}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-secondary/50"></div>
      </div>

      <div className="card-shadow rounded-xl p-4 col-span-2 row-start-3 flex items-center justify-center flex-col">
        <h2 className="font-bold text-3xl">Our Mission </h2>
        <p className="text-md font-medium">
          To bridge the gap between industry and education: solving real
          challenges for energy companies while empowering the next generation
          of engineers, scientists, and decision-makers through practical and
          high quality learning.
        </p>
      </div>
      <div className="card-shadow rounded-xl p-4 col-span-2 col-start-3 row-start-3 flex items-center justify-center flex-col">
        <h2 className="font-bold text-3xl">Our Vision </h2>
        <p className="text-md font-medium">
          To be recognised as a trusted partner for energy consulting and a
          leading hub for knowledge sharing, innovation, and education in the
          global energy landscape.
        </p>
      </div>
    </div>
  );
}

export default About;
