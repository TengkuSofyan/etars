import React from 'react'
import data from '../../data';
import Card from '../Card';

function Team() {
    const teamMembers = data.teamMembers;
    return (
        <div className="px-4 md:px-6 lg:px-8 py-8 xl:py-18 text-primary relative max-w-7xl">
            {/* <div className="absolute inset-0 bg-gray-800/50 z-" /> */}
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[32px] md:text-[34px] lg:text-[48px] font-extrabold text-dark text-center font-outfit">
                    Meet Our <span className='text-teal'>Team</span>
                </h2>
                <p className='text-dark mt-6 tracking-wider max-w-3xl text-center'> We are a team of dedicated professionals who possess a strong track record in both academia and the oil and gas industry, ready to share our expertise with you.
                </p>
                <div className="py-6 grid-cols-1 grid-rows-2 grid md:grid-cols-3 md:grid-rows-1 gap-4 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <Card
                            key={index}
                            name={member.name}
                            job={member.job}
                            image={member.image}
                            email={member.email}
                            linkedin={member.linkedin}
                            github={member.github}
                            role={member.role}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
