import React from "react";
import foodOrder from "../assets/food-order.png";
import natoursTravel from "../assets/natours-travel.png";
import eplWeb from '../assets/epl-web.png';
import laslesVPN from '../assets/lp-laslesvpn.png';
import userLogin from '../assets/users-login.png';
import yukTravel from '../assets/yuktravel.png';
import Project from "./Project";

const projects = [
  {
    id: 1,
    title: 'OrderMeals',
    imgBg: foodOrder,
    linkPort: 'https://food-order-lake.vercel.app/',
    linkGithub: 'https://github.com/nordeeen/Food-Order-App',
  },
  {
    id: 2,
    title: 'Natours Travel',
    imgBg: natoursTravel,
    linkPort: 'https://natours-travel-landing-page.netlify.app/',
    linkGithub: 'https://github.com/nordeeen/Landing-Page-Travel-Natours',
  },
  {
    id: 3,
    title: 'EPL Football Web',
    imgBg: eplWeb,
    linkPort: 'https://gibol.netlify.app/',
    linkGithub: 'https://github.com/nordeeen/Gibol-web-app',
  },
  {
    id: 4,
    title: 'Landing Page LaslesVPN',
    imgBg: laslesVPN,
    linkPort: 'https://landingpage-lasles-vpn.vercel.app/',
    linkGithub: 'https://github.com/nordeeen/Landingpage-LaslesVPN',
  },
  {
    id: 5,
    title: 'Users Login Page',
    imgBg: userLogin,
    linkPort: 'https://users-login-web.vercel.app/',
    linkGithub: 'https://github.com/nordeeen/Users-login-web',
  },
  {
    id: 6,
    title: 'Yuk Travel Web',
    imgBg: yukTravel,
    linkPort: 'https://web-travel-gules.vercel.app/',
    linkGithub: 'https://github.com/nordeeen/Web-Travel',
  },
];


const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="breakpoint text-4xl font-bold inline text-gray-300 border-b-4 border-pink-600">
            Project
          </p>
          <p className="breakpoint py-4">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects.map((val, i) => {
            return (
              <Project key={i} title={val.title} img={val.imgBg} portofolio={val.linkPort} github={val.linkGithub}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
