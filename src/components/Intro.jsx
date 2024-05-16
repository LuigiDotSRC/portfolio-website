import React from 'react';
import LinkedInButton from './LinkedinButton';
import GithubButton from './GithubButton';

function Intro() {
  return (
    <div className="flex items-center ml-3 my-4 justify-center text-center flex-col pt-20 pb-6">
      <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold min-w-lg">Luigi Andre Terashima</h1>
      <p className="text-3xl md:text-2xl mb-3 font-medium">Software Developer & Computer Science Student @ TMU</p>
      <p className="text-lg max-w-2xl mb-6">
        I'm a Computer Science student at Toronto Metropolitan University with a keen interest in Cloud Computing and Artificial Intelligence. Alongside my studies, I'm passionate about coding and enjoy staying active through weightlifting and volleyball. I'm driven by the desire to leverage technology to solve complex problems and make a positive impact in the world. 
      </p>
      
      <div className="flex items-center">
        <LinkedInButton/>
        <GithubButton/>
      </div>
    </div>
  )
}

export default Intro; 