import React from "react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

function TimelineView() {
  return (
    <div>
      <Intro />
      <Navbar select='timeline'/>
      <div className="flex items-center justify-center">
        <p className="italic my-8">Coming soon...</p>
      </div>
    </div>
  )
}

export default TimelineView;