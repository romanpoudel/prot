import React from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import IconButton from '@mui/material/IconButton';


function Project({ project,href }) {
  return (
    <div className="h-3/5 w-80 border-white border-4 rounded-lg m-auto">
      <div className="border-transparent  bg-white h-3/4 w-full ">
        <img
          className="object-cover hover:object-scale-down rounded-t-lg h-full"
          src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"
          alt=""
        />
      </div>
      <div className="bg-white h-1/4  ">
        <div className="text-center font-cookie text-xl pt-4">{project}</div>
        <br />
        <div className="text-center"><IconButton color="primary" href={href}><VisibilityOutlinedIcon /></IconButton></div>
      </div>
    </div>
  );
}

export default Project;
