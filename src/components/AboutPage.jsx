import React from "react";

import Card from "./Card";
import Head from "./About/head";
import Story from "./About/Story";
import Vision from "./About/vision";
import Team from "./About/team";
import Expertise from "./About/Expertise";
import FindUs from "./About/FindUs"

function AboutPage() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Head />

      {/* Vision Mission */}
      <Vision />

      {/* Story */}
      <Story />

      {/* expertise */}
      <Expertise />

      {/* Team */}
      <Team />

      {/* find us */}
      <FindUs />
    </div>
  );
}

export default AboutPage;
