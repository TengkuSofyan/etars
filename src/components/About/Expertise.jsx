import { React } from 'react';
import SlideInLeft from "@/components/motion/SlideInLeft";
import SlideInRight from "@/components/motion/SlideInRight";
import FadeIn from "../motion/FadeIn";

function Expertise() {

    return (
        <div className='max-w-7xl px-4 lg:py-14 xl:py-18 lg:px-8 xl:px-18 py-8'>
            <h2 className='text-[32px] md:text-[34px] lg:text-[48px] font-extrabold text-dark text-center font-outfit'>Our <span className='text-teal'>Expertise</span> </h2>
            <p className='text-dark mt-6 tracking-wider'> Our expertise is built on the synergy between applied energy, sciences, and data analytics, delivering tangible value to both industry and academia across these key disciplines:
            </p>

            <div className="grid grid-cols-4 grid-rows-3 md:grid-cols-6 md:grid-rows-2 lg:grid-cols-7 lg:grid-rows-2 gap-4 text-dark my-8 font-outfit font-bold text-center">
                <SlideInLeft className="col-span-2 bg-primary rounded-tl-xl rounded-br-xl p-4 text-md md:text-xl text-soft center">
                    <p>Reservoir Engineering</p>
                </SlideInLeft>
                <SlideInLeft className="col-span-2 col-start-3 bg-primary rounded-tl-xl rounded-br-xl p-4 text-soft center">
                    <p>Well Testing</p>
                </SlideInLeft>
                <SlideInLeft className="col-span-2 row-start-2 md:col-start-5 md:row-start-1 bg-primary rounded-tl-xl rounded-br-xl p-4 text-soft text-md md:text-xl center">
                    <p>Well Completion</p>
                </SlideInLeft>
                <SlideInRight className="col-span-2 col-start-3 row-start-2 md:col-start-1 md:row-start-2 lg:col-start-2 bg-dark rounded-tr-xl rounded-bl-xl text-soft p-4 text-md md:text-xl center">
                    <p>Petrophysics</p>
                </SlideInRight>
                <SlideInRight className="col-span-2 row-start-3 md:col-start-3 md:row-start-2 lg:col-start-4 bg-dark rounded-tr-xl rounded-bl-xl text-soft p-4 text-md md:text-xl center">
                    <p>Polymer Flooding</p>
                </SlideInRight>
                <SlideInRight className="col-span-2 col-start-3 row-start-3 md:col-start-5 md:row-start-2 lg:col-start-6 bg-dark rounded-tr-xl rounded-bl-xl text-soft p-4 text-md md:text-xl center" >
                    <p>Machine Learning & Data Sciences</p>
                </SlideInRight>
                <div className="hidden lg:block lg:col-start-7 lg:row-start-1 bg-dark rounded-tl-xl rounded-br-xl"></div>
                <div className="hidden lg:block lg:col-start-1 lg:row-start-2 bg-primary rounded-tr-xl rounded-bl-xl"></div>
            </div>
        </div>
    )
}

export default Expertise
