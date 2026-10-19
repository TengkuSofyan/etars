("/logo.svg");
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import AboutPage from "./components/AboutPage";


import WeDoPage from "./components/WeDoPage";
import ResourcePage from "./components/ResourcePage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Journal_3_Page from "./components/Journal_3_Page";
import Journal_4_Page from "./components/Journal_4_Page";
import Journal_1_Page from "./components/Journal_1_Page"
import Journal_2_Page from "./components/Journal_2_Page";
import Journal_5_Page from "./components/Journal_5_Page";
import Journal_6_Page from "./components/Journal_6_Page";
import Journal_7_Page from "./components/Journal_7_Page";
import Journal_8_Page from "./components/Journal_8_Page";

gsap.registerPlugin(_ScrollTrigger);
function App() {
  return (
    <div className="w-screen ">
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/we-do" element={<WeDoPage />} />
        <Route path="/resource" element={<ResourcePage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/we-do/1" element={<Journal_1_Page />} />
        <Route path="/we-do/2" element={<Journal_2_Page />} />
        <Route path="/we-do/3" element={<Journal_3_Page />} />
        <Route path="/we-do/4" element={<Journal_4_Page />} />
        <Route path="/we-do/5" element={<Journal_5_Page />} />
        <Route path="/we-do/6" element={<Journal_6_Page />} />
        <Route path="/we-do/7" element={<Journal_7_Page />} />
        <Route path="/we-do/8" element={<Journal_8_Page />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
