import React from "react";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-xl text-[#7C62F3] font-bold">Ghulam Ali</div>
        <ul className="flex gap-6 text-white font-medium cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
