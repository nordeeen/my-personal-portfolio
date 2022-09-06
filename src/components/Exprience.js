import React from "react";
import Progate from "../assets/progate-logo.png";
import Dts from "../assets/dts-logo.jpg";
import Dewaweb from "../assets/dewaweb-logo.jpg";

const Exprience = () => {
  const datasExp = [
    {
      id: 1,
      date: "5 October - 8 November 2020",
      subjects: "HTML, CSS, JavaScript & ReactJS",
      title: "Instructor Coding Experience Bootcamp",
      description:
        "Answer questions participants, Implement clean code, Review source code participants and Help resolve errors/bugs.",
      firstLogo: Dts,
      firstTitleLogo: "Kominfo-DTS",
      secondLogo: Progate,
      secondTitleLogo: "Progate",
    },
    {
      id: 2,
      date: "7 March - 24 March 2022",
      subjects: "JavaScript ( Array, Object & DOM )",
      title: "Instructor Coding Dewaweb Bootcamp",
      description:
        "Answer questions from participants, Review source code participants, help participants fix errors/bugs and Review projects from participants.",
      firstLogo: Dewaweb,
      firstTitleLogo: "Dewaweb",
      secondLogo: Progate,
      secondTitleLogo: "Progate",
    },
  ];

  return (
    <>
      <section className="w-full h-full bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] mx-auto bg-[#0a192f] p-4 flex flex-col justify-center w-full h-full">
            <div className="mb-12">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                Experience
              </p>
            </div>
            <div>
              {datasExp.map((datas) => {
                return (
                  <div
                    key={datas.id}
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                    className="max-w-2xl px-8 py-4 mx-auto bg-[#0a192f] shadow-[#040c16] border-[#0a192f]rounded-lg shadow-md dark:bg-[#0a192f] mb-6"
                    style={{ cursor: "auto" }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-light text-gray-300">
                        {datas.date}
                      </span>
                      <div className="px-3 py-1 text-sm font-bold text-gray-100  bg-pink-600 rounded">
                        {datas.subjects}
                      </div>
                    </div>
                    <div className="mt-2">
                      <h1 className="text-2xl font-bold text-gray-300 underline decoration-pink-600">
                        {datas.title}
                      </h1>
                      <p className="mt-2 text-gray-300 text-left">
                        {datas.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <img
                          src={datas.firstLogo}
                          alt="KominfoDTS-logo"
                          className="hidden object-cover w-12 h-12 mx-4 rounded-full sm:block"
                        />
                        <h2 className="font-bold text-gray-300 px-2">
                          {datas.firstTitleLogo}
                        </h2>
                        <img
                          src={datas.secondLogo}
                          alt="progate-logo"
                          className="hidden object-cover w-12 h-12 mx-4 rounded-full sm:block"
                        />
                        <h2 className="font-bold text-gray-300">
                          {datas.secondTitleLogo}
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exprience;
