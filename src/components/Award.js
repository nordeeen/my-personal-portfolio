import React from "react";
import Link from "../assets/link.png";
import Progate from "../assets/progate-logo.png";
import Dicoding from "../assets/dicoding-logo.png";
import Udemy from "../assets/udemy-logo.png";

const Award = () => {
  // datas
  const datas = [
    {
      id: 1,
      photo: Progate,
      title: "Progate & DTS",
      description: "Mentor Coding Experience Bootcamp",
      skill: "HTML, CSS & Javascript",
      year: "October 2020",
    },
    {
      id: 2,
      photo: Dicoding,
      title: "Dicoding",
      description: "Basic Web Programming",
      skill: "HTML, CSS & Javascript",
      year: "June 2020",
    },
    {
      id: 3,
      photo: Dicoding,
      title: "Dicoding",
      description: "Fundamental Frontend Web Development",
      skill: "HTML, CSS, JS & PWA",
      year: "June 2020",
    },
    {
      id: 4,
      photo: Progate,
      title: "Progate",
      description: "Frontend Web Development",
      skill: "HTML, CSS, JS & React JS",
      year: "August 2020",
    },
    {
      id: 5,
      photo: Udemy,
      title: "Udemy",
      description: " React JS Complete Bootcamp",
      skill: "Hooks, API, Router, Redux",
      year: "May 2022",
    },
    {
      id: 6,
      photo: Progate,
      title: "Progate & Dewaweb",
      description: "Instructor Coding",
      skill: "Javascript",
      year: "March 2022",
    },
  ];

  return (
    <>
      <section className="w-full h-full bg-[#0a192f] text-gray-300">
        <div className="max-w-[1000px] mx-auto bg-[#0a192f] p-4 flex flex-col justify-center w-full h-full">
          <div className="mb-3">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Award
            </p>
          </div>
          <a
            className="flex text-xl text-blue-600 underline font-semibold italic"
            href="https://drive.google.com/drive/folders/1u2haQlTu7XO7Z456m_5RSId7jcK_itxg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Link}
              alt="logo-link"
              style={{
                width: "18px",
                height: "18px",
                objectFit: "cover",
                marginRight: "11px",
                marginTop: "5px",
              }}
            />
            Certificate
          </a>
          <div className="mx-auto my-auto">
            {datas.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex flex-col items-center bg-[#0a192f] rounded-lg border md:flex-row md:max-w-xl shadow-[#040c16] mb-4 shadow-md border-[#0a192f]"
                >
                  <img
                    className="object-cover w-full h-100 rounded-t-lg md:h-auto md:w-60 md:rounded-none md:rounded-l-lg px-4 py-2"
                    src={data.photo}
                    alt="logo"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-pink-600 dark:text-white">
                      {data.title}
                    </h1>
                    <p className="mb-3 font-bold text-gray-300 ">
                      {data.description}
                    </p>
                    <p className="mb-3 font-bold text-gray-300 ">
                      {data.skill} <span className="text-pink-600">&#187;</span>{" "}
                      {data.year}
                    </p>
                  </div>
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
