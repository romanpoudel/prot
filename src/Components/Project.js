import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import IconButton from "@mui/material/IconButton";
import CodeIcon from "@mui/icons-material/Code";

function Project({ project, demo, code, src }) {
  return (
    <div className="w-72 border-white border-4 rounded-lg m-auto bg-[#072238]">
      <div className="border-transparent  bg-white h-[200px] w-full">
        <img
          className="rounded-t-lg bg-[#072238]  h-full object-cover"
          src={src}
          alt="demo img"
        />
      </div>
      <div className="rounded-b-lg bg-[#072238]">
        <div className="text-center text-white font-cookie text-xl pt-2">
          {project}
        </div>
        {/* <br /> */}
        <div className="text-center">
          <IconButton color="primary" href={demo}>
            <VisibilityOutlinedIcon />
          </IconButton>
          <IconButton color="primary" href={code}>
            <CodeIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Project;
