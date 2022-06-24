import React from "react";
import Project from "./Project";

function Works() {
  return (
    <div
      id="works"
      className="w-screen h-screen   flex flex-col justify-evenly p-14 "
      style={{ backgroundColor: "#00A568" }}
    >
      <div className="text-center font-kdam text-white text-4xl mt-10 pt-1 font-bold">
        WORKS
      </div>
      <div className="flex h-4/5 ">
        <Project
          project="Beauty Salon"
          href="https://shreejabeautyparlour.netlify.app/"
          src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/08/28183850/home_post_2.gif"
        />
        <Project
          project="Front to Back"
          href="https://github.com/romanpoudel/fronttoback"
          src="https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/34%20of%20the%20Best%20Website%20Designs%20to%20Inspire%20You%20in%202022-Feb-05-2022-12-30-34-43-AM.jpeg?width=600&name=34%20of%20the%20Best%20Website%20Designs%20to%20Inspire%20You%20in%202022-Feb-05-2022-12-30-34-43-AM.jpeg"
        />
        <Project
          project="React Native Camera"
          href="https://github.com/romanpoudel/reactnative_camera"
          src="https://colorlib.com/cdn-cgi/image/width=1100,height=855,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/best-website-builder-for-online-clothing-store.jpg"
        />
      </div>
    </div>
  );
}

export default Works;
