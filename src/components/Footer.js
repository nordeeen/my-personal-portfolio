import React from "react";
import Logo from "../assets/mylogo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-[100px] bg-[#0a192f] flex justify-center align-center">
        <div className="flex flex-col">
          <div className="px-16">
            <img style={{ width: "75px" }} src={Logo} alt="logo" />
          </div>
          <h2 className="text-sm text-gray-300 font-bold">
            Copyright &copy; Ahmad Nurdiansah
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
