import React from "react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

function ContactView() {
  return (
    <div>
      <Intro />
      <Navbar select='contact'/>
      <Contact />
    </div>
  )
}

export default ContactView;