import React from 'react'
import data from '../../data';
import Card from '../Card';

function Team() {
    const teamMembers = data.teamMembers;
    return (
        <div className="px-4 md:px-6 lg:px-8 py-12 text-primary relative">
            {/* <div className="absolute inset-0 bg-gray-800/50 z-" /> */}
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[32px] md:text-[34px] lg:text-[40px] font-bold text-center gradient-text">
                    Meet Our Expert
                </h2>
                <div className="py-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <Card
                            key={index}
                            name={member.name}
                            job={member.job}
                            image={member.image}
                            email={member.email}
                            linkedin={member.linkedin}
                            github={member.github}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
