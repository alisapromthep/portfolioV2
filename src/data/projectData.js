import virtualWanderHome from "../assets/projects/virtualWanderHome.png";
import allergyTrackingHome from "../assets/projects/reaction-home.png";
import whosthatpokemonHome from "../assets/projects/whosthatpokemonHome.png";
import catpropcafeHome from "../assets/projects/cat-prop-cafe-homepage.png";
import cssIcon from "../assets/icons/css-3.svg";
import expressIcon from "../assets/icons/express.svg";
import gitIcon from "../assets/icons/git-icon.svg";
import htmlIcon from "../assets/icons/html-5.svg";
import jsIcon from "../assets/icons/javascript.svg";
import knexIcon from "../assets/icons/knex.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import nodeIcon from "../assets/icons/nodejs-icon.svg";
import reactIcon from "../assets/icons/react.svg";
import sassIcon from "../assets/icons/sass.svg";

export const projectData = [
  {
    id: 1,
    name: "Reaction",
    img: allergyTrackingHome,
    description:
      "Full-stack CRUD web application to help you track your allergies or food intolerance, with logs organized by type of food for easy comparison. ",
    techIcon: [
      jsIcon,
      reactIcon,
      sassIcon,
      cssIcon,
      nodeIcon,
      expressIcon,
      knexIcon,
      mysqlIcon,
    ],
    techstack: [
      "Javascript",
      "React",
      "SASS ",
      "CSS",
      "NodeJs",
      "Express",
      "KnexJS",
      "MySQL ",
    ],
    links: [
      {
        name: "visit site",
        url: "https://track-reaction.netlify.com",
      },
      {
        name: "Github",
        url: "https://github.com/alisapromthep/alisa-promthep-reaction-client",
      },
    ],
    casestudy: {
      purpose:
        "This allergy tracking application was created to help people understand their body's reaction to food. Hopefully help them avoid things that makes them feel sick, or even causes allergic reaction. I grew up with one major allergy, but I started to noticed that my immune system seems to evolve and I become more sensitive to certain food. I developed this application with lots of icons in hopes to make tracking fun and easy.",
      challenges: {},
    },
  },
  {
    id: 2,
    name: "Cat-Prop-Cafe",
    img: catpropcafeHome,
    description:
      "A little game for new web developers learning how to use React Props. The React components are visualized as a cafe with cats, and you are tasked to move things around by passing props.",
    techIcon: [jsIcon, reactIcon, sassIcon, cssIcon],
    techstack: ["Javascript", " React", "SASS ", "CSS"],
    tools:
      "Utilized React Hooks, useContext, custom hooks to create the game logic and centralize game functions and information.",
    links: [
      {
        name: "visit site",
        url: "https://cat-prop-cafe.netlify.app/",
      },
      {
        name: "github",
        url: "https://github.com/alisapromthep/cat-prop-cafe",
      },
    ],
  },
  {
    id: 3,
    name: "Who's that Pokemon?",
    img: whosthatpokemonHome,
    description:
      "24 hours hackathon using the Pokemon API and Document Object Model(DOM) methodd to create a pokemon identification game.",
    techIcon: [jsIcon, sassIcon, cssIcon],
    techstack: ["Javascript", "SASS", "CSS"],
    links: [
      {
        name: "VISIT SITE",
        url: "https://whosthatpokemon-hackathon.netlify.app/",
      },
      {
        name: "github",
        url: "https://github.com/menu89/whos-that-pokmon",
      },
    ],
    casestudy: {
      purpose: "",
      challenges: "",
    },
  },
];
