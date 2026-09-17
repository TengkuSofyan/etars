import React from "react";
import ParallaxBanner from "./components/ParallaxBanner";
("/vite.svg");
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Task from "./components/Task";
import Member from "./components/Member";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import AboutPage from "./components/AboutPage";
import { FaHeart } from "react-icons/fa";

import WeDoPage from "./components/WeDoPage";
import ResourcePage from "./components/ResourcePage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

gsap.registerPlugin(_ScrollTrigger);
function App() {
  return (
    <div className="w-screen ">
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/we-do" element={<WeDoPage />} />
        <Route path="/resource" element={<ResourcePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
