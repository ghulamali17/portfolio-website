import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Stats from "./Stats";
import { Link } from "react-scroll";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
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
        assionate about building smart and scalable web applications. I began
        learning IT and programming in 2022, completed a full-stack development
        course from SMIT, and have been exploring new technologies ever since to
        refine my skills. I'm focused on continuous learning and aim to build a
        strong career in the IT industry, eventually moving toward AI and data
        science.
      </p>

      <div
        className="flex flex-wrap gap-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <a href="/cv.pdf" download>
          <button className="px-6 cursor-pointer py-2 border-2 border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
            Download CV
          </button>
        </a>

        <Link to="projects" smooth={true} duration={500} offset={-70}>
          <button className="px-6 py-2 cursor-pointer bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition-all duration-300">
            View Projects
          </button>
        </Link>
      </div>
      <Stats />
    </div>
  );
}

export default About;
