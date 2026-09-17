import React from "react";
import stickNoteImg from "/img/stick-note.jpg";
import SlideInLeft from "@/components/motion/SlideInLeft";
import SlideInRight from "@/components/motion/SlideInRight";
import FadeIn from "../motion/FadeIn";

function Story() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 px-4 md:px-6 lg:px-8 py-12 bg-soft max-w-[1280px] xl:rounded-xl">
        <FadeIn className="relative rounded-xl overflow-hidden">
          <img src={stickNoteImg} className="w-full h-full " />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-secondary/50" />
        </FadeIn>
        <SlideInRight className="text-dark">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] gradient-text font-bold pb-0 ">
            Our Story
          </h2>
          <p className=" md:pb-2 text-justify">
            As am hastily invited settled at limited civilly fortune me. Really
            spring in extent an by. Judge but built gay party world. Of so am he
            remember although required. Bachelor unpacked be advanced at.
            Confined in declared marianne is vicinity.
          </p>
          <p className="md:pb-2 text-justify">
            Conveying or northward offending admitting perfectly my. Colonel
            gravity get thought fat smiling add but. Wonder twenty hunted and
            put income set desire expect. Am cottage calling my is mistake
            cousins talking up. Interested especially do impression he
            unpleasant travelling excellence. All few our knew time done draw
            ask.
          </p>
        </SlideInRight>
      </div>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: Blob Image */}
            <SlideInLeft>
              <div className="relative">
                {/* Glow */}
                <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-[#0F766E]/25 via-[#1B9C8F]/15 to-[#2EC4B6]/20 blur-2xl" />

                {/* Blob */}
                <div className="relative blob-mask overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop"
                    alt="Our story"
                    className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                  />

                  {/* Brand overlay (subtle) */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0F766E]/20 via-transparent to-[#2EC4B6]/15" />
                </div>
              </div>
            </SlideInLeft>

            {/* Right: Text */}
            <SlideInRight>
              <div>
                <p className="text-sm font-semibold tracking-wider text-[#0F766E]">
                  ABOUT
                </p>

                <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Our Story
                </h2>

                <p className="mt-4 max-w-prose leading-relaxed text-slate-600">
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
