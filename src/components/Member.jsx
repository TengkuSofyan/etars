import React from "react";
import Card from "./Card";

function Member() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      job: "Senior Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      email: "sarah.j@example.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Michael Chen",
      job: "UX/UI Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
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
