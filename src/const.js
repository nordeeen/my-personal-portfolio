import Progate from './assets/progate-logo.png';
import Udemy from './assets/udemy-logo.png';
import html from './assets/html.png';
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import react from './assets/react.png';
import tailwind from './assets/tailwind.png';
import redux from './assets/redux.png';
import git from './assets/git.png';
import foodOrder from './assets/food-order.png';
import natoursTravel from './assets/natours-travel.png';
import eplWeb from './assets/epl-web.png';
import laslesVPN from './assets/lp-laslesvpn.png';
import userLogin from './assets/users-login.png';
import yukTravel from './assets/yuktravel.png';
import typescript from './assets/typescript.png';

export const allDataWords = {
  titlesOne: 'About Me',
  titlesSecond: 'Awards',
  titlesThird: 'Skills',
  titleFour: 'Experiences',
  titleFive: 'Projects',
  titleSix: 'Contact Me',
  // footerTitle: 'Copyright &copy; Ahmad Nurdiansah',
  descTitleThird: `These are the technologies I've worked with`,
  descTitleFive: `Check out some of my recent work`,
  myAddress: `Jl. Bendungan Melayu DKI Jakarta, Indonesia Jakarta Utara 14230`,
  fullName: 'Ahmad Nurdiansah',
  titleJob: 'Front End Developer',
  urlGithub: 'https://github.com/nordeeen/',
  urlLinkedin: 'https://www.linkedin.com/in/ahmadnurdiansah/',
  urlCertificate:
    'https://drive.google.com/drive/folders/1u2haQlTu7XO7Z456m_5RSId7jcK_itxg',
  urlResume:
    'https://drive.google.com/uc?export=download&id=161192yU7Ax4jILSEh28MTKKcqg8pKlsP',
  // 'https://drive.google.com/uc?export=download&id=1ABP-VLyrPr6JQbAyYuBs6bLRhfIaQ-by',
  descHome:
    'A Frontend Developer passionate about creating interactive applications and experiences on the web.',
  aboutMe: `
     👋 I'm Ahmad Nurdiansah. I'm a Frontend Developer with hands-on
     and thorough experience in JavaScript frameworks like ReactJS, 
     and understanding important concepts like Fetching API, State 
     Management, RestfulAPI, etc.
`,
};

export const datasListExp = [
  {
    id: 1,
    date: 'January 2023 - January 2024',
    subjects: 'ReactJS, Redux Toolkit, Chakra-UI, Sass',
    title: 'Front-End Developer at Feedloop',
    description:
      'Writing and testing program code, Debugging and fixing errors in code and Collaborated with design & Collaborated with design and back-end teams to implement user interfaces and integrate front-end code with back-end systems.',
  },
  {
    id: 2,
    date: ' March 2022 - March 2022',
    subjects: 'JavaScript Basics',
    title:
      'Coding Instructor on the event 21-Days Bootcamp Javascript ( Progate & Dewaweb).',
    description:
      'Answer questions from participants, Review source code participants, help participants fix errors/bugs and Review projects from participants.',
  },
  {
    id: 3,
    date: 'September 2021 - February 2022',
    subjects: 'ReactJS, Redux Toolkit, Material-UI',
    title: 'Front-End Developer at TOG Indonesia',
    description:
      'Writing and testing program code, Debugging and fixing errors in code and Collaborated with design & Collaborated with design and back-end teams to implement user interfaces and integrate front-end code with back-end systems.',
  },
  {
    id: 4,
    date: 'October 2020 - November 2020',
    subjects: 'HTML, CSS, Scss, JavaScript',
    title:
      'Coding Instructor on the event Program Ready Set Code! (Progate & Kominfo).',
    description:
      'Answer questions from participants, Review source code participants, help participants fix errors/bugs and Review projects from participants.',
  },
];

export const datasListAwards = [
  {
    id: 1,
    photo: Progate,
    title: 'Progate & DTS',
    description: 'Mentor Coding Experience Bootcamp',
    skill: 'HTML, CSS & Javascript',
    year: 'October 2020',
  },
  {
    id: 2,
    photo: Progate,
    title: 'Progate',
    description: 'Frontend Web Development',
    skill: 'HTML, CSS, JS & React JS',
    year: 'August 2020',
  },
  {
    id: 3,
    photo: Udemy,
    title: 'Udemy',
    description: ' React JS Complete Bootcamp',
    skill: 'Hooks, API, Router, Redux',
    year: 'May 2022',
  },
  {
    id: 4,
    photo: Progate,
    title: 'Progate & Dewaweb',
    description: 'Instructor Coding',
    skill: 'Javascript',
    year: 'March 2022',
  },
];

export const datasListSkills = [
  {
    id: 1,
    logo: html,
    name: 'html',
  },
  {
    id: 2,
    logo: css,
    name: 'css',
  },
  {
    id: 3,
    logo: javascript,
    name: 'javascript',
  },
  {
    id: 4,
    logo: react,
    name: 'react',
  },
  {
    id: 5,
    logo: typescript,
    name: 'typescript',
  },
  {
    id: 6,
    logo: tailwind,
    name: 'tailwindcss',
  },
  {
    id: 7,
    logo: redux,
    name: 'redux',
  },
  {
    id: 8,
    logo: git,
    name: 'git',
  },
];

export const datasListProjects = [
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
