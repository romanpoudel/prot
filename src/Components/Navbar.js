import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center h-14  text-white top-0 w-full  fixed bg-[#072238] z-10">
      <div className="mx-6 sm:mx-14  uppercase font-dm text-2xl sm:text-3xl tracking-[6px] sm:tracking-[12px]">
        Roman
      </div>
      <div className="hidden sm:flex justify-between mx-8  space-x-16">
        <div>
          <a href="#intro" className="no-underline text-white">
            Introduction
          </a>
        </div>
        <div>
          <a href="#works" className="no-underline text-white">
            Works
          </a>
        </div>
        <div>
          <a href="#contact" className="no-underline text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
