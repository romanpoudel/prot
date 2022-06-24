import React from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import IconButton from '@mui/material/IconButton';


function Project({ project,href,src }) {
  return (
    <div className="h-100 w-72 border-white border-4 rounded-lg m-auto" style={{backgroundColor:"#072238"}}>
      <div className="border-transparent  bg-white h-3/4 w-full " style={{backgroundColor:"white"}}>
        <img
          className="object-cover hover:object-scale-down rounded-t-lg h-full"
          style={{backgroundColor:"#072238"}}
          src={src}
          alt=""
        />
      </div>
      <div className="h-1/4 rounded-b-lg" style={{backgroundColor:"#072238"}}>
        <div className="text-center text-white font-cookie text-xl pt-4">{project}</div>
        <br />
        <div className="text-center"><IconButton color="primary" href={href}><VisibilityOutlinedIcon /></IconButton></div>
      </div>
    </div>
  );
}

export default Project;
