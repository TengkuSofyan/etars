import React from "react";

import Card from "./Card";
import Head from "./About/head";
import Story from "./About/Story";
import Vision from "./About/vision";
import Team from "./About/team";
function AboutPage() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Head />

      {/* Vision Mission */}
      <Vision />

      {/* Story */}
      <Story />


      {/* Team */}
      <Team />
    </div>
  );
}

export default AboutPage;
