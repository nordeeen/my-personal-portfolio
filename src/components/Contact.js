import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../assets/document/CV_Ahmad Nurdiansah.pdf";
import ScrollTop from "./ScrollTop";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Contact Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-xl font-bold">
            <p>Jl. Bendungan Melayu</p>
            <p>DKI Jakarta, Indonesia</p>
            <p>Jakarta Utara 14230</p>
          </div>
          <div className="flex justify-around">
            <li
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="bg-[#565f69] w-[80px] h-[80px] rounded-sm list-none p-4 hover:scale-110  duration-500"
            >
              <a
                className="text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
                href={Resume}
                download
              >
                <BsFillPersonLinesFill size={30} />
                <p className="text-[13px]">Resume</p>
              </a>
            </li>
            <li
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="bg-blue-600 h-[80px] rounded-sm list-none p-4 hover:scale-110  duration-500"
            >
              <a
                className="text-gray-300"
                href="https://www.linkedin.com/in/ahmadnurdiansah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
                <p className="text-[13px]">Linkedin</p>
              </a>
            </li>
            <li
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="bg-[#333333] h-[80px] rounded-sm list-none p-4 hover:scale-110 duration-500"
            >
              <a
                className="text-gray-300"
                href="https://github.com/nordeeen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
                <p className="text-[13px]">Github</p>
              </a>
            </li>
          </div>
        </div>
        <ScrollTop />
      </div>
    </div>
  );
};

export default Contact;
