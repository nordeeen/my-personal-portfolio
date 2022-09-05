import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import boostrap from "../assets/boostrap.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import git from "../assets/git.png";

const Skills = () => {
  const dataSkill = [
    {
      id: 1,
      logo: html,
      name: "html",
    },
    {
      id: 2,
      logo: css,
      name: "css",
    },
    {
      id: 3,
      logo: javascript,
      name: "javascript",
    },
    {
      id: 4,
      logo: react,
      name: "react",
    },
    {
      id: 5,
      logo: boostrap,
      name: "boostrap",
    },
    {
      id: 6,
      logo: tailwind,
      name: "tailwindcss",
    },
    {
      id: 7,
      logo: redux,
      name: "redux",
    },
    {
      id: 8,
      logo: git,
      name: "git",
    },
  ];

  //
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Skills
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            {dataSkill.map((item) => (
              <div
                data-aos="zoom-in"
                data-aos-duratin="500"
                key={item.id}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <img className="w-20 mx-auto" src={item.logo} alt="HTML icon" />
                <p className="my-4 uppercase">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
