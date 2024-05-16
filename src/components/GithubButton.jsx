import React from 'react';
import { FaGithub } from "react-icons/fa";

function GithubButton() {
  return (
    <a href="https://github.com/LuigiDotSRC">
      <button className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center mx-2">
        <FaGithub size={24} className="mr-2"/> 
        <span>Github</span>
      </button>
    </a>
  )
}

export default GithubButton;