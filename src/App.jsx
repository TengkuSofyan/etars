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
import BlogPage from "./components/BlogPage";
import Blog2Page from "./components/Blog2Page";
import Blog3Page from "./components/Blog3Page";
import ScrollToTop from "./components/ScrollToTop";

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
        <Route path="/we-do/1" element={<BlogPage />} />
        <Route path="/we-do/2" element={<Blog3Page />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
