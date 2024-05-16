import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

function Navbar({ select }) {
  return (
    <div className="flex items-center justify-center">
      <NavLink to="/projects" className={`mx-4 text-xl hover:text-blue-800 ${select === 'projects' ? 'underline font-bold' : ''}`}>Projects</NavLink>
      <NavLink to="/timeline" className={`mx-4 text-xl hover:text-blue-800 ${select === 'timeline' ? 'underline font-bold' : ''}`}>Timeline</NavLink>
      <NavLink to="/archive" className={`mx-4 text-xl hover:text-blue-800 ${select === 'archive' ? 'underline font-bold' : ''}`}>Archive</NavLink>
      <NavLink to="/contact" className={`mx-4 text-xl hover:text-blue-800 ${select === 'contact' ? 'underline font-bold' : ''}`}>Contact Me</NavLink>
    </div>
  );
}

export default Navbar;
