import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-white px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#A78BFA] mb-2 font-orbitron">
          Contact Me
        </h2>
        <p className="text-gray-400">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      {/* Contact Card */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#1d1d2e] to-[#141421] border border-[#2d2d3f] p-8 rounded-2xl shadow-xl backdrop-blur-md">
        <h3 className="text-2xl font-semibold text-[#A78BFA] mb-4">
          Get in Touch
        </h3>
        <p className="text-gray-400 mb-6">
          Have something to discuss? Send me a message and let’s talk.
        </p>

        <form className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#2a2a3a] text-white rounded-lg p-3 outline-none border border-[#3d3d50] focus:border-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#2a2a3a] text-white rounded-lg p-3 outline-none border border-[#3d3d50] focus:border-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="bg-[#2a2a3a] text-white rounded-lg p-3 outline-none border border-[#3d3d50] focus:border-purple-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:opacity-90 transition"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>

        {/* Socials */}
        <div className="mt-6">
          <h4 className="text-gray-300 mb-4">Connect With Me</h4>
          <div className="space-y-3">
            <a
              href="https://www.linkedin.com/in/ghulam-ali-dev/"
              className="flex items-center gap-3 bg-[#2d2d3f] p-3 rounded-lg hover:bg-[#3d3d5f] transition"
            >
              <FaLinkedin className="text-blue-400" />
              <span>Let’s Connect on LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/ghulam_.ali"
              className="flex items-center gap-3 bg-[#2d2d3f] p-3 rounded-lg hover:bg-[#3d3d5f] transition"
            >
              <FaInstagram className="text-pink-400" />
              <span>@ghulam_.ali</span>
            </a>
            <a
              href="https://github.com/ghulamali17"
              className="flex items-center gap-3 bg-[#2d2d3f] p-3 rounded-lg hover:bg-[#3d3d5f] transition"
            >
              <FaGithub className="text-gray-300" />
              <span>@ghulamali17</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;