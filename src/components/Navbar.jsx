import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-sm shadow-md">
      <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-xl text-[#6865F1] font-bold">Ghulam Ali</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64} // Adjust for fixed nav height
                activeClass="text-[#7C62F3]"
                className="cursor-pointer hover:text-[#7C62F3] transition"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-[#0f0f0f]/95 text-white flex flex-col items-center gap-6 py-6 shadow-lg transition-all duration-300">
          {menuItems.map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
                activeClass="text-[#7C62F3]"
                className="cursor-pointer hover:text-[#7C62F3] text-lg transition"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
