import React from "react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

function ProjectsView() { 
  return (
    <div>
      <Intro />
      <Navbar select='projects'/>
      <Portfolio />
    </div>
  )
}

export default ProjectsView;