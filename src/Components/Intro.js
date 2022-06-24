import React from "react";
import img from "../images/roman.jpg";

function Intro() {
  return (
    <div
      id="intro"
      className="flex  w-screen h-screen  mt-2 p-20"
      style={{ backgroundColor: "#072238" }}
    >
      <div className="mt-14 mr-10 pr-4 w-2/4 flex flex-col justify-center">
        <img
          src={img}
          alt=""
          className="border-4 border-cyan-700 rounded-full w-1/2   top-20 p-2 "
        />
      </div>
      <div className="font-kdam text-white text-4xl w-2/4 flex flex-col justify-center ">
        Hello!
        <br />I am Roman Poudel enthusiast in
        <span style={{ color: "red"}}>
          <b>MERN</b>
        </span>
        stack development.
      </div>
    </div>
  );
}

export default Intro;
