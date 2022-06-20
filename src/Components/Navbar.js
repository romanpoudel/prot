import React from "react";


function Navbar() {
  return (
    <nav className="flex justify-between items-center h-14  text-white top-0 w-full  fixed " style={{backgroundColor:"#072238"}}>
      <div className="right_side mx-14  uppercase font-dm text-3xl " style={{letterSpacing:"12px" }}>Roman</div>
      <div className="left_side flex justify-between text-white mx-8 space-x-16">
        <div>
          <a href="#intro">Introduction</a>
        </div>
        <div>
          <a href="#works">Works</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
