import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import IconButton from "@mui/material/IconButton";
import CodeIcon from "@mui/icons-material/Code";

function Project({ project, demo, code, src }) {
  return (
    <div className="w-72 border-white border-4 rounded-lg m-auto bg-[#072238]">
      <div className="border-transparent  bg-white h-3/4 w-full">
        <img
          className="object-cover hover:object-scale-down rounded-t-lg h-full bg-[#072238]"
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
