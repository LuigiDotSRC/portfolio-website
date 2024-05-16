import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function ProjectCard({ title, imgUrl, stack, link }) {
  const iconMapping = {
    React: <FaReact className="mr-2"/>,
    NodeJS: <FaNodeJs className="mr-2"/>,
    JavaScript: <IoLogoJavascript className="mr-2"/>,
    HTML: <FaHtml5 className="mr-2"/>,
    CSS: <FaCss3 className="mr-2"/>,
    GitHub: <FaGithub className="mr-2"/>,
    Python: <FaPython className="mr-2"/>,
  }

  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden">
      <img src={imgUrl} className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map(item => (
            <span className="inline-flex items-center px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
              {iconMapping[item]} 
              <span>{item}</span> 
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard; 