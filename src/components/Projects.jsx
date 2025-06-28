import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaCertificate, FaCogs } from "react-icons/fa";

import ecommerce from "../assets/react.png";
import ommart from "../assets/om.png";
import firebaseProject from "../assets/firebase.png";
import codeSnip from "../assets/codesnip.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import cert from "../assets/cert.jpg";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import foodProject from "../assets/food.png";

function Projects() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const tabs = [
    { name: "Projects", icon: <FaLaptopCode /> },
    { name: "Certificates", icon: <FaCertificate /> },
    { name: "Tech Stack", icon: <FaCogs /> },
  ];

  const projects = [
    {
      title: "React E-commerce Website",
      desc: "A responsive e-commerce frontend using React, Firebase, Redux, and Tailwind CSS with dynamic product loading.",
      img: ecommerce,
      live: "https://github.com/ghulamali17/react-redux-ecommerce-website",
      details: "https://github.com/ghulamali17/react-redux-ecommerce-website",
    },
    {
      title: "React Based Food Delivery Website",
      desc: "A modern and responsive food ordering web app with cart, search, filtering, and dynamic pricing using React & Redux.",
      img: foodProject,
      live: "https://foodzilla-web.netlify.app",
      details: "https://github.com/ghulamali17/react-food-delivery-website",
    },
    {
      title: "CodeSnip – Note-Taking App ",
      desc: "A full-stack note-taking app using React, Firebase, Redux, and Tailwind CSS to manage code/text snippets in real time.",
      img: codeSnip,
      live: "https://wondrous-cajeta-e09e4d.netlify.app/",
      details: "https://github.com/ghulamali17/paste-app",
    },
    {
      title: "Dynamic E-commerce Shopping Website.",
      desc: "A dynamic shirt shop built with HTML, CSS, Bootstrap, and JavaScript using JSON for products and an interactive cart.",
      img: ommart,
      live: "https://ommart-ecommerce.netlify.app/",
      details:
        "https://github.com/ghulamali17/ommart-ecommerce-website-template",
    },
    {
      title: "Firebase Social Media Website",
      desc: "A Firebase full-stack social app with one-click login, real-time chat, and instant post sharing.",
      img: firebaseProject,
      live: "https://ghulamali17.github.io/quickpost-firebase-app/",
      details: "https://github.com/ghulamali17/react-food-delivery-website",
    },
  ];

  const certificates = [
    {
      img: cert1,
      title: "Web Development - 1 Building with HTML, CSS, JavaScript",
      issued: "BANO QABIL KARACHi",
    },
    {
      img: cert,
      title: "Python Data Structures",
      issued: "COURSERA",
    },
    {
      img: cert2,
      title: "Programming for Everybody (Getting Started with Python)",
      issued: "COURSERA",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div
      id="projects"
      className="min-h-screen bg-[#0f0f0f] text-white px-4 py-12 flex flex-col items-center"
    >
      <h1
        className="text-[#6D65F2] text-4xl md:text-5xl font-bold mb-4 font-orbitron"
        data-aos="zoom-in"
      >
        Portfolio Showcase
      </h1>
      <p
        className="text-gray-300 text-center max-w-2xl mb-10"
        data-aos="fade-up"
      >
        Explore my journey through projects, certifications, and technical
        expertise. Each section represents a milestone in my continuous learning
        path.
      </p>

      {/* Tabs */}
      <div className="w-full flex justify-center">
        <div className="flex gap-4 flex-wrap justify-center bg-gradient-to-r from-[#1b1b2f] via-[#1a1a2e] to-[#16213e] p-2 rounded-2xl shadow-lg border border-gray-700/30 backdrop-blur-md mb-12 max-w-md w-full">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => {
                setActiveTab(tab.name);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300 ease-in-out whitespace-nowrap ${
                activeTab === tab.name
                  ? "bg-gradient-to-r from-[#6D65F2] to-[#9C89FF] text-white shadow-md scale-105"
                  : "bg-[#0f0f0f]/50 text-gray-400 hover:bg-[#6D65F2]/20 hover:text-white"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      {activeTab === "Projects" && (
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-[#1e1e2f] rounded-2xl overflow-hidden shadow-xl transition-transform transform hover:scale-[1.02] duration-300 border border-[#2e2e3e]"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="w-full aspect-video bg-black">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
                  <div className="flex justify-between items-center text-sm">
                    <a
                      href={project.live}
                      className="text-blue-400 hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={project.details}
                      className="bg-[#2d2d3f] text-white px-4 py-1.5 rounded-lg hover:bg-[#3d3d5f] transition"
                    >
                      Github Repo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-white bg-[#6D65F2] hover:bg-[#5b52da] px-6 py-2 rounded-xl shadow-md transition"
              >
                {showAll ? "See Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Certificates */}
      {activeTab === "Certificates" && (
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 cursor-pointer">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#1d1d2e] to-[#141421] border border-[#2d2d3f] p-6 rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.02] duration-300 shadow-xl backdrop-blur-md"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="rounded-lg mb-4 w-full h-auto max-h-80 object-contain border border-[#3c3c4f]"
                />
                <h4 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-400">{cert.issued}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack */}
      {activeTab === "Tech Stack" && (
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              {
                name: "HTML",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              },
              {
                name: "CSS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              },
              {
                name: "JavaScript",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                name: "React",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Tailwind CSS",
                img: tailwind,
              },
              {
                name: "Material UI",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
              },
              {
                name: "Bootstrap",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
              },
              {
                name: "Node.js",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Express.js",
                img: express,
              },
              {
                name: "Firebase",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-[#1c1c2b] border border-[#2e2e3e] rounded-xl py-6 px-4 shadow-md transition-transform hover:scale-105 hover:shadow-[0_0_12px_#6D65F2] cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-12 h-12 mb-3 object-contain"
                />
                <span className="text-white text-sm font-medium text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
