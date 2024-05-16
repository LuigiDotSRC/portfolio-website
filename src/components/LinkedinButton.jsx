import React from 'react';
import { FaLinkedin } from "react-icons/fa";

function LinkedInButton() {
  return (
    <a href="https://www.linkedin.com/in/luigi-terashima/">
      <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mx-2">
        <FaLinkedin size={24} className="mr-2"/> 
        <span>LinkedIn</span>
      </button>
    </a>
  )
}

export default LinkedInButton;