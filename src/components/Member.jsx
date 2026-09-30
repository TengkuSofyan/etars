import React from "react";
import Card from "./Card";
import user1 from "/img/user1.jpeg"
import user2 from "/img/user2.jpeg"

function Member() {
  const teamMembers = [
    {
      name: "Tengku Sofyan",
      job: "Ph.D Candidate in Petroleum Engineering Department at KFUPM",
      image:
        user1,
      email: "sarah.j@example.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Muhamman Aufa",
      job: "Reservoir Engineer at EMP",
      image:
        user2,
      email: "michael.c@example.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  ];

  return (
    <div className="mb-5">
      <div className="px-4">
        <h2 className="font-bold text-4xl">Our Team</h2>

        <div className="flex items-center justify-center flex-col mt-5  gap-5">
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
  );
}

export default Member;
