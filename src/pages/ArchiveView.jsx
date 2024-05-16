import React from "react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

function ArchiveView() {
  return (
    <div>
      <Intro />
      <Navbar select='archive'/>
      <div className="flex items-center justify-center">
        <p className="italic my-8">Coming soon...</p>
      </div>
    </div>
  )
}

export default ArchiveView;