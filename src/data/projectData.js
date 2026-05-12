import allergyTrackingHome from "../assets/projects/reaction-home.png";
import shutterstockHome from "../assets/projects/shutterstock-homepage.png";
import cssIcon from "../assets/icons/css-3.svg";
import expressIcon from "../assets/icons/express.svg";
import jsIcon from "../assets/icons/javascript.svg";
import knexIcon from "../assets/icons/knex.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import nodeIcon from "../assets/icons/nodejs-icon.svg";
import reactIcon from "../assets/icons/react.svg";
import sassIcon from "../assets/icons/sass.svg";
import nextjsIcon from "../assets/icons/nextjs.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import perplexityIcon from "../assets/icons/perplexity.svg";

export const projectData = [
  {
    id: 1,
    featured: true,
    name: "Ingredients Navigator",
    img: null,
    video: "https://player.vimeo.com/video/1088298677",
    badge: "Solo Hackathon Build",
    tagline: "AI-powered ingredient research for beauty brands",
    description:
      "A personal care ingredient platform that automates discovery, market trend analysis, regulatory claim substantiation, and growth opportunities — built to close the data gap for small beauty brands who can't access expensive ingredient databases.",
    techIcon: [jsIcon, reactIcon, nextjsIcon, perplexityIcon],
    techstack: [
      "JavaScript",
      "NextJS",
      "React",
      "TailwindCSS",
      "Perplexity AI",
      "OpenAI",
    ],
    highlights: [
      "Built solo from concept to prototype in under a week",
      "Two-layer AI prompting system for ingredient search and filter validation",
      "Generates downloadable PDF reports with market trends and claim guidance",
      "Conceived, scoped, and shipped entirely independently",
    ],
    links: [
      {
        name: "Devpost",
        url: "https://devpost.com/software/ingredients-navigator",
      },
      {
        name: "GitHub",
        url: "https://github.com/alisapromthep/ingredient-navigator/",
      },
    ],
  },
  {
    id: 2,
    name: "Solar Sync",
    img: null,
    video: "https://player.vimeo.com/video/857308781",
    badge: "🏆 1st Place — Girls in Tech: Hack for the Environment",
    tagline: "Eco-conscious EV charging powered by solar",
    description:
      "A platform for EV drivers to find, book, and loan solar-powered charging stations — built by a cross-functional team of 5 across different time zones in 48 hours.",
    techIcon: [nextjsIcon, typescriptIcon, reactIcon],
    techstack: [
      "NextJS",
      "TypeScript",
      "Firebase",
      "Google Maps API",
      "Chargetrip API",
    ],
    highlights: [
      "1st place winner out of all submissions",
      "Cross-functional team: UX, marketing, engineering across time zones",
      "Independently learned NextJS and TailwindCSS under 48-hour deadline",
      "Features map view, charger booking, solar credits, and leaderboard",
    ],
    links: [
      { name: "Live demo", url: "https://solar-sync.vercel.app" },
      { name: "Devpost", url: "https://devpost.com/software/solar-sync" },
      {
        name: "GitHub",
        url: "https://github.com/solarsync23/solarsync/tree/main",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/proto/V93Tnke33VPOdm5sP4wr09/Designs?page-id=2%3A748&type=design&node-id=30-226&viewport=356%2C484%2C0.1&t=aOT8Z07ftUjx1CtT-1&scaling=scale-down&starting-point-node-id=30%3A220&show-proto-sidebar=1&mode=design",
      },
    ],
  },
  {
    id: 3,
    name: "Reaction",
    img: allergyTrackingHome,
    badge: "Capstone Project",
    tagline: "Track your allergies and food intolerances",
    description:
      "Full-stack web application to help you track allergies and food intolerances, with logs organized by food type for easy pattern comparison.",
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
      "JavaScript",
      "React",
      "SASS",
      "CSS",
      "NodeJS",
      "Express",
      "KnexJS",
      "MySQL",
    ],
    highlights: [
      "Full stack build — client, server, and database",
      "Custom REST API with Express and KnexJS",
      "Food log organized by category for pattern tracking",
    ],
    links: [
      {
        name: "GitHub (client)",
        url: "https://github.com/alisapromthep/alisa-promthep-reaction-client",
      },
    ],
  },
  {
    id: 4,
    name: "Shutterstock",
    img: shutterstockHome,
    badge: "🏆 1st Place — BrainStation x Shutterstock Hackathon",
    tagline: "Homepage redesign and new feature concept",
    description:
      "A recreation of the Shutterstock homepage with an additional features section and new feature page, built as a proof of concept in collaboration between Web Developers and UX Designers.",
    techIcon: [jsIcon, reactIcon, sassIcon, cssIcon],
    techstack: ["JavaScript", "React", "SASS", "CSS"],
    highlights: [
      "Cross-functional collaboration with UX designers",
      "Designed and built new feature page from Figma specs",
      "Team coordination via Git for simultaneous development",
    ],
    links: [
      { name: "Demo", url: "https://shutterstock-bstn-hackathon.netlify.app/" },
      {
        name: "GitHub",
        url: "https://github.com/Orloaft/shutterstock-hackathon",
      },
    ],
  },
];
