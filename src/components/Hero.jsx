import React from "react";
import HeroImg from "../assets/img-hero.png";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Hero() {
  return (
    <div className="relative z-10 max-w-[1200px] mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-10">
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
          <button className="px-6 py-3 flex items-center gap-2 rounded-lg text-white font-medium bg-[#0f0f0f] border border-white/10 shadow-[0_0_20px_#7c3aed50] hover:shadow-[0_0_30px_#7c3aed80] transition-all duration-300 backdrop-blur-md">
            Projects <GrProjects />
          </button>
          <button className="px-6 py-3 flex items-center gap-2 rounded-lg text-white font-medium bg-[#0f0f0f] border border-white/10 shadow-[0_0_20px_#7c3aed50] hover:shadow-[0_0_30px_#7c3aed80] transition-all duration-300 backdrop-blur-md">
            Contact <MdOutlineMail className="text-xl" />
          </button>
        </div>
        {/* Socail  */}
        <div className="flex gap-6 mt-10">
          <div className="p-4 rounded-xl bg-[#0f0f0f]/60 border border-white/10 text-white shadow-[0_0_20px_#7c3aed40] hover:shadow-[0_0_30px_#7c3aed70] backdrop-blur-md transition-all duration-300 cursor-pointer">
            <FaGithub className="text-xl" />
          </div>
          <div className="p-4 rounded-xl bg-[#0f0f0f]/60 border border-white/10 text-white shadow-[0_0_20px_#7c3aed40] hover:shadow-[0_0_30px_#7c3aed70] backdrop-blur-md transition-all duration-300 cursor-pointer">
            <FaLinkedin className="text-xl" />
          </div>
          <div className="p-4 rounded-xl bg-[#0f0f0f]/60 border border-white/10 text-white shadow-[0_0_20px_#7c3aed40] hover:shadow-[0_0_30px_#7c3aed70] backdrop-blur-md transition-all duration-300 cursor-pointer">
            <FaInstagram className="text-xl" />
          </div>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={HeroImg}
          alt="Hero illustration"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
