import React from "react";


function Navbar() {
  return (
    <nav className="flex justify-between items-center h-14  text-white top-0 w-full  fixed " style={{backgroundColor:"#072238",zIndex:"100"}}>
      <div className="right_side mx-14  uppercase font-dm text-3xl " style={{letterSpacing:"12px" }}>Roman</div>
      <div className="left_side flex justify-between mx-8 space-x-16">
        <div>
          <a href="#intro" style={{textDecoration:"none",color:"white"}} >Introduction</a>
        </div>
        <div>
          <a href="#works"  style={{textDecoration:"none",color:"white"}}>Works</a>
        </div>
        <div>
          <a href="#contact"  style={{textDecoration:"none",color:"white"}}>Contact</a>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
