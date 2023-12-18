import React from 'react';
import { datasListProjects, allDataWords } from '../const';
import Project from './Project';

// w-full md:h-screen
// w-full h-full 
const Work = () => {
  return (
    <div name="work" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="breakpoint text-4xl font-bold inline text-gray-300 border-b-4 border-pink-600">
            {allDataWords.titleFive}
          </p>
          <p className="breakpoint py-4">{allDataWords.descTitleFive}</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {datasListProjects.map((item) => {
            return (
              <Project
                key={item.id}
                title={item.title}
                img={item.imgBg}
                portofolio={item.linkPort}
                github={item.linkGithub}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
