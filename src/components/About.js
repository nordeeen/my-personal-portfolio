import React from "react";
import myPhoto from "../assets/my-photo.jpeg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 p-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="flex justify-center align-center"
          >
            <img
              src={myPhoto}
              alt="myphoto"
              style={{
                maxWidth: "60%",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </div>
          <div>
            <p data-aos="fade-up" className="text-left">
              👋 I'm Ahmad Nurdiansah. I'm is Frontend Developer with hands-on
              and throught experience in Javascript framework like ReactJS and
              understanding important concepts like Fecthing API, State
              Management, RestfulAPI, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
