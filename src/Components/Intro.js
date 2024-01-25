import React from "react";
import img from "../images/roman.jpg";

function Intro() {
  return (
    <div
      id="intro"
      className="flex flex-col items-center md:flex-row gap-20 md:gap-0 w-screen h-screen  mt-2 p-20 bg-[#072238]"
    >
      <div className="mt-14 sm:mt-0 md:w-2/4 flex flex-col items-center">
        <img
          src={img}
          alt="profile_image"
          className="border-4 border-cyan-700 rounded-full min-w-[250px] w-3/5 sm:w-1/2   top-20 p-2 "
        />
      </div>
      <div className="font-kdam text-white text-4xl md:w-2/4 flex flex-col justify-center text-center sm:leading-normal">
        Hello!
        <br />I am Roman Poudel enthusiast in
        <span className="text-red-500">
          <b>MERN</b>
        </span>
        stack development.
      </div>
    </div>
  );
}

export default Intro;
