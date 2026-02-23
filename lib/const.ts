// Types
export interface ExperienceItem {
  id: number;
  date: string;
  subjects: string;
  title: string;
  description: string;
}

export interface AwardItem {
  id: number;
  photo: string;
  title: string;
  description: string;
  skill: string;
  year: string;
}

export interface SkillItem {
  id: number;
  logo: string;
  name: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  imgBg: string;
  linkPort: string;
  linkGithub: string;
}

export const allDataWords = {
  titlesOne: "About Me",
  titlesSecond: "Awards",
  titlesThird: "Skills",
  titleFour: "Experiences",
  titleFive: "Projects",
  titleSix: "Contact Me",
  descTitleThird: `These are the technologies I've worked with`,
  descTitleFive: `Check out some of my recent work`,
  myAddress: `Jl. Bendungan Melayu DKI Jakarta, Indonesia Jakarta Utara 14230`,
  fullName: "Ahmad Nurdiansah",
  titleJob: "Front End Developer",
  urlGithub: "https://github.com/nordeeen/",
  urlLinkedin: "https://www.linkedin.com/in/ahmadnurdiansah/",
  urlCertificate:
    "https://drive.google.com/drive/folders/1u2haQlTu7XO7Z456m_5RSId7jcK_itxg",
  urlResume:
    "https://drive.google.com/uc?export=download&id=161192yU7Ax4jILSEh28MTKKcqg8pKlsP",
  descHome:
    "A Frontend Developer passionate about creating interactive applications and experiences on the web.",
  aboutMe: `
     👋 I'm Ahmad Nurdiansah. I'm a Frontend Developer with hands-on
     and thorough experience in JavaScript frameworks like ReactJS, 
     and understanding important concepts like Fetching API, State 
     Management, RestfulAPI, etc.
`,
};

export const datasListExp: ExperienceItem[] = [
  {
    id: 1,
    date: "January 2023 - January 2024",
    subjects: "ReactJS, Redux Toolkit, Chakra-UI, Sass",
    title: "Front-End Developer at Feedloop",
    description:
      "Writing and testing program code, Debugging and fixing errors in code and Collaborated with design & Collaborated with design and back-end teams to implement user interfaces and integrate front-end code with back-end systems.",
  },
  {
    id: 2,
    date: " March 2022 - March 2022",
    subjects: "JavaScript Basics",
    title:
      "Coding Instructor on the event 21-Days Bootcamp Javascript ( Progate & Dewaweb).",
    description:
      "Answer questions from participants, Review source code participants, help participants fix errors/bugs and Review projects from participants.",
  },
  {
    id: 3,
    date: "September 2021 - February 2022",
    subjects: "ReactJS, Redux Toolkit, Material-UI",
    title: "Front-End Developer at TOG Indonesia",
    description:
      "Writing and testing program code, Debugging and fixing errors in code and Collaborated with design & Collaborated with design and back-end teams to implement user interfaces and integrate front-end code with back-end systems.",
  },
  {
    id: 4,
    date: "October 2020 - November 2020",
    subjects: "HTML, CSS, Scss, JavaScript",
    title:
      "Coding Instructor on the event Program Ready Set Code! (Progate & Kominfo).",
    description:
      "Answer questions from participants, Review source code participants, help participants fix errors/bugs and Review projects from participants.",
  },
];

export const datasListAwards: AwardItem[] = [
  {
    id: 1,
    photo: "/assets/progate-logo.png",
    title: "Progate & DTS",
    description: "Mentor Coding Experience Bootcamp",
    skill: "HTML, CSS & Javascript",
    year: "October 2020",
  },
  {
    id: 2,
    photo: "/assets/progate-logo.png",
    title: "Progate",
    description: "Frontend Web Development",
    skill: "HTML, CSS, JS & React JS",
    year: "August 2020",
  },
  {
    id: 3,
    photo: "/assets/udemy-logo.png",
    title: "Udemy",
    description: " React JS Complete Bootcamp",
    skill: "Hooks, API, Router, Redux",
    year: "May 2022",
  },
  {
    id: 4,
    photo: "/assets/progate-logo.png",
    title: "Progate & Dewaweb",
    description: "Instructor Coding",
    skill: "Javascript",
    year: "March 2022",
  },
];

export const datasListSkills: SkillItem[] = [
  { id: 1, logo: "/assets/html.png", name: "html" },
  { id: 2, logo: "/assets/css.png", name: "css" },
  { id: 3, logo: "/assets/javascript.png", name: "javascript" },
  { id: 4, logo: "/assets/react.png", name: "react" },
  { id: 5, logo: "/assets/typescript.png", name: "typescript" },
  { id: 6, logo: "/assets/tailwind.png", name: "tailwindcss" },
  { id: 7, logo: "/assets/redux.png", name: "redux" },
  { id: 8, logo: "/assets/git.png", name: "git" },
];

export const datasListProjects: ProjectItem[] = [
  {
    id: 1,
    title: "OrderMeals",
    imgBg: "/assets/food-order.png",
    linkPort: "https://food-order-lake.vercel.app/",
    linkGithub: "https://github.com/nordeeen/Food-Order-App",
  },
  {
    id: 2,
    title: "Natours Travel",
    imgBg: "/assets/natours-travel.png",
    linkPort: "https://natours-travel-landing-page.netlify.app/",
    linkGithub: "https://github.com/nordeeen/Landing-Page-Travel-Natours",
  },
  {
    id: 3,
    title: "EPL Football Web",
    imgBg: "/assets/epl-web.png",
    linkPort: "https://gibol.netlify.app/",
    linkGithub: "https://github.com/nordeeen/Gibol-web-app",
  },
  {
    id: 4,
    title: "Landing Page LaslesVPN",
    imgBg: "/assets/lp-laslesvpn.png",
    linkPort: "https://landingpage-lasles-vpn.vercel.app/",
    linkGithub: "https://github.com/nordeeen/Landingpage-LaslesVPN",
  },
  {
    id: 5,
    title: "Users Login Page",
    imgBg: "/assets/users-login.png",
    linkPort: "https://users-login-web.vercel.app/",
    linkGithub: "https://github.com/nordeeen/Users-login-web",
  },
  {
    id: 6,
    title: "Yuk Travel Web",
    imgBg: "/assets/yuktravel.png",
    linkPort: "https://web-travel-gules.vercel.app/",
    linkGithub: "https://github.com/nordeeen/Web-Travel",
  },
];
