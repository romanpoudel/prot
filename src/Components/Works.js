import React from 'react'
import Project from './Project'


function Works() {
  return (
    <div id="works" className="w-screen h-screen flex  " style={{backgroundColor:"#263E51"}}>
        <Project project="Beauty Salon" href="https://shreejabeautyparlour.netlify.app/"/>
        <Project project="Front to Back" href="https://github.com/romanpoudel/fronttoback"/>
        <Project project="React Native Camera" href="https://github.com/romanpoudel/reactnative_camera"/>
      </div>
  )
}

export default Works