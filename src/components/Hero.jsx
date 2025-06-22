import React from "react";
import HeroImg from "../assets/img-hero.png";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="relative z-10  max-w-[1200px] h-auto mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-10">
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Full Stack <br />
          <span className="text-[#6D65F2]">Developer</span>
        </h1>
        {/* Hero Typing  */}
        <div className="text-xl text-gray-300 mt-4">
          <TypeAnimation
            sequence={[
              "Computer Science Student",
              2500,
              "Full Stack Developer",
              2500,
              "MERN Stack Developer",
              2500,
              "FrontEnd Developer",
              2500,
            ]}
            wrapper="span"
            speed={200}
            repeat={Infinity}
            cursor={true}
          />
        </div>

        <p className="mt-4 text-lg text-gray-300">
          Creating modern web applications that scale beautifully.
        </p>

        {/* Buttons  */}
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/10">
            React
          </div>
          <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/10">
            JavaScript
          </div>
          <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/10">
            Node.js
          </div>
          <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/10">
            Tailwind
          </div>
        </div>
        {/* Project / Contact  */}
        <div className="flex gap-6 mt-10">
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <button className="px-6 cursor-pointer py-3 flex items-center gap-2 rounded-lg text-white font-medium bg-[#0f0f0f] border border-white/10 shadow-[0_0_20px_#7c3aed50] hover:shadow-[0_0_30px_#7c3aed80] transition-all duration-300 backdrop-blur-md">
              Projects <GrProjects />
            </button>
          </Link>

          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <button className="px-6 cursor-pointer py-3 flex items-center gap-2 rounded-lg text-white font-medium bg-[#0f0f0f] border border-white/10 shadow-[0_0_20px_#7c3aed50] hover:shadow-[0_0_30px_#7c3aed80] transition-all duration-300 backdrop-blur-md">
              Contact <MdOutlineMail className="text-xl" />
            </button>
          </Link>
        </div>
        {/* Socail  */}
       <div className="flex gap-6 mt-10">
  {/* GitHub */}
  <a
    href="https://github.com/ghulamali17"
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-xl bg-[#0f0f0f]/60 border border-white/10 text-white shadow-[0_0_20px_#7c3aed40] hover:shadow-[0_0_30px_#7c3aed70] backdrop-blur-md transition-all duration-300 cursor-pointer"
  >
    <FaGithub className="text-xl" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/ghulam-ali-dev/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-xl bg-[#0f0f0f]/60 border border-white/10 text-white shadow-[0_0_20px_#7c3aed40] hover:shadow-[0_0_30px_#7c3aed70] backdrop-blur-md transition-all duration-300 cursor-pointer"
  >
    <FaLinkedin className="text-xl" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/ghulam_.ali/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-xl bg-[#0f0f0f]/60 border border-white/10 text-white shadow-[0_0_20px_#7c3aed40] hover:shadow-[0_0_30px_#7c3aed70] backdrop-blur-md transition-all duration-300 cursor-pointer"
  >
    <FaInstagram className="text-xl" />
  </a>
</div>

      </div>

      {/* Right Image Content */}
      <div className="w-full md:w-1/2 flex justify-center items-end h-full">
        <div
          className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden 
               border-4 border-[#6D65F2] shadow-xl shadow-[#6D65F260]
               transition-transform duration-500 hover:scale-105"
        >
          <img
            src={HeroImg}
            alt="Hero illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
