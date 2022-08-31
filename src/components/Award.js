import React from "react";
import RightArrow from "../assets/right-arrow.png";

const Award = () => {
  // datas
  const datas = [
    {
      id: 1,
      title: "Progate & DTS",
      description: "Mentor Coding Experience Bootcamp",
      skill: "HTML, CSS & Javascript",
      year: "October 2020",
    },
    {
      id: 2,
      title: "Dicoding",
      description: "Basic Web Programming",
      skill: "HTML, CSS & Javascript",
      year: "June 2020",
    },
    {
      id: 3,
      title: "Dicoding",
      description: "Fundamental Frontend Web Development",
      skill: "HTML, CSS, JS & PWA",
      year: "June 2020",
    },
    {
      id: 4,
      title: "Progate",
      description: "Frontend Web Development",
      skill: "HTML, CSS, JS & React JS",
      year: "August 2020",
    },
    {
      id: 5,
      title: "Udemy",
      description: " React JS Complete Bootcamp",
      skill: "Hooks, API, Router, Redux",
      year: "May 2022",
    },
    {
      id: 6,
      title: "Progate & Dewaweb",
      description: "Instructor Coding",
      skill: "Javascript",
      year: "March 2022",
    },
  ];

  return (
    <>
      <section className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="max-w-[1000px] mx-auto bg-[#0a192f] p-4 flex flex-col justify-center w-full h-full">
          <div className="mb-1">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Award
            </p>
          </div>
          <div>
            {datas.map((data) => {
              return (
                <div>
                  <div key={data.id} className="flex relative text-center">
                    <img
                      src={RightArrow}
                      alt="logo-right-arrow"
                      style={{
                        width: "18px",
                        height: "18px",
                        objectFit: "cover",
                        position: "absolute",
                        bottom: "9px",
                      }}
                    />
                    <h1 className="ml-6 text-2xl font-bold text-pink-600 mt-4">
                      {data.title}
                    </h1>
                  </div>
                  <h2 className="text-lg font-bold text-color-gray-300">
                    {data.description}
                  </h2>
                  <p className="text-base font-bold text-color-gray-300">
                    {data.skill}
                    <span className="w-[9px] h-[9px] bg-[whitesmoke] rounded-[50%] inline-block mx-2" />
                    {data.year}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
