import React from "react";
import SlideInLeft from "@/components/motion/SlideInLeft";
import SlideInRight from "@/components/motion/SlideInRight";
import FadeIn from "../motion/FadeIn";
import imgStory from "/img/story.jpg"

function Story() {
  return (
    <>
      <section className="relative w-full max-w-7xl">
        <div className=" px-4 sm:px-6 lg:px-8 xl:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: Blob Image */}
            <SlideInLeft className="order-2 lg:order-1">
              <div className="relative">
                {/* Glow */}
                <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-[#0F766E]/25 via-[#1B9C8F]/15 to-[#2EC4B6]/20 blur-2xl" />

                {/* Blob */}
                <div className="relative overflow-hidden shadow-lg ring-1 ring-black/5 rounded-tl-4xl rounded-br-4xl">
                  <img
                    src={imgStory}
                    alt="Our story"
                    className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                  />

                  {/* Brand overlay (subtle) */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0F766E]/20 via-transparent to-[#2EC4B6]/15" />
                </div>
              </div>
            </SlideInLeft>

            {/* Right: Text */}
            <SlideInRight className="order-1 lg:order-2">
              <div>
                <p className="text-sm font-semibold tracking-wider text-[#0F766E]">
                  ABOUT
                </p>

                <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-outfit">
                  Our <span className="text-teal">Story</span>
                </h2>

                <p className="mt-6 max-w-prose leading-relaxed text-slate-600">
                  As an independent consulting and education group in the energy
                  and oil &amp; gas sector, we combine technical expertise with
                  data science and machine learning to deliver practical and
                  innovative solutions.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200">
                    Consulting
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200">
                    Education
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200">
                    Data &amp; ML
                  </span>
                </div>

                <div className="mt-8">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
    </>
  );
}

export default Story;
