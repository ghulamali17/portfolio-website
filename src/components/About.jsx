import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Stats from "./Stats";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#0f0f0f]">
      <h1
        className="text-[#6D65F2] font-bold text-4xl md:text-5xl mb-6"
        data-aos="zoom-in-down"
      >
        About Me
      </h1>

      <p
        className="max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed mb-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hello, I'm{" "}
        <span className="text-purple-400 font-medium">Ghulam Ali</span> — 
        passionate about building smart and scalable web & mobile applications.
        I've completed a full-stack development course and constantly explore
        new technologies to refine my skills. Focused on continuous learning, I
        aim to transition into the IT industry by 2021 and eventually move
        towards AI and data science.
      </p>

      <div
        className="flex flex-wrap gap-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <button className="px-6 py-2 border-2 border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
          Download CV
        </button>
        <button className="px-6 py-2 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition-all duration-300">
          View Projects
        </button>
      </div>
      <Stats/>
    </div>
  );
}

export default About;