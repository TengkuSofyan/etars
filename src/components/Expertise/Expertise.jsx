import { React } from 'react';

function Expertise() {

    return (
        <div className='max-w-7xl lg:py-14 xl:py-18 lg:px-8 xl:px-18 bg-gray-100'>
            <h2 className='text-[32px] md:text-[34px] lg:text-[48px] font-extrabold text-dark text-center font-outfit'>Our <span className='text-teal'>Expertise</span> </h2>
            <p className='text-dark mt-6 tracking-wider'> Our expertise is built on the synergy between applied energy, sciences, and data analytics, delivering tangible value to both industry and academia across these key disciplines:
            </p>

            <div className="grid grid-cols-7 grid-rows-2 gap-4 text-dark my-8 font-outfit font-bold text-center">
                <div className="col-span-2 bg-primary rounded-tl-xl rounded-br-xl p-4  text-xl text-soft">Reservoir Engineering</div>
                <div className="col-span-2 col-start-3 bg-primary rounded-tl-xl rounded-br-xl p-4 text-soft">Well Testing</div>
                <div className="col-span-2 col-start-5 bg-primary rounded-tl-xl rounded-br-xl p-4 text-soft">Well Completion</div>
                <div className="col-span-2 col-start-2 row-start-2 bg-dark rounded-tr-xl rounded-bl-xl text-soft p-4">Petrophysics</div>
                <div className="col-span-2 col-start-4 row-start-2 bg-dark rounded-tr-xl rounded-bl-xl text-soft p-4">Polymer Flooding</div>
                <div className="col-span-2 col-start-6 row-start-2 bg-dark rounded-tr-xl rounded-bl-xl text-soft p-4">Machine Learning & Data Sciences</div>
                <div className="col-start-7 row-start-1 bg-dark rounded-tl-xl rounded-br-xl"></div>
                <div className="col-start-1 row-start-2 bg-primary rounded-tr-xl rounded-bl-xl"></div>
            </div>
        </div>
    )
}

export default Expertise
