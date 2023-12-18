import React from 'react';
import myFotoProfile from '../assets/foto-profile-portofolio.jpg';
// import myPhoto from '../assets/my-photo.jpeg';
import CodersLife from '../assets/coders-life.jpg';
import { allDataWords } from '../const';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 p-4">
            <p className="breakpoint text-4xl font-bold inline border-b-4 border-pink-600">
              {allDataWords.titlesOne}
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
              src={myFotoProfile}
              alt="myphoto"
              style={{
                maxWidth: '60%',
                objectFit: 'cover',
                borderRadius: '4px',
                // borderLeft: '4px solid rgb(219 39 119)',
                // borderRight: '4px solid rgb(219 39 119)',
                // border: '6px solid rgb(219 39 119)',
              }}
            />
          </div>
          <div>
            <p data-aos="fade-up" className="text-left">
              {allDataWords.aboutMe}
            </p>
            <div className="py-4 px-1">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={CodersLife}
                alt="Coders-Life"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
