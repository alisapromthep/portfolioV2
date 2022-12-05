import virtualWanderHome from '../assets/projects/virtualWanderHome.png';
import allergyTrackingHome from '../assets/projects/allergyTracking.png';
import shutterstockHome from '../assets/projects/shutterstockHome.png';
import whosthatpokemonHome from '../assets/projects/whosthatpokemonHome.png';
import cssIcon from '../assets/icons/css-3.svg';
import expressIcon from '../assets/icons/express.svg';
import gitIcon from '../assets/icons/git-icon.svg';
import htmlIcon from '../assets/icons/html-5.svg';
import jsIcon from '../assets/icons/javascript.svg';
import muiIcon from '../assets/icons/material-ui.svg';
import knexIcon from '../assets/icons/knex.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import nodeIcon from '../assets/icons/nodejs-icon.svg';
import reactIcon from '../assets/icons/react.svg';
import sassIcon from '../assets/icons/sass.svg';


export const projectData = [
    {
        "id": 1,
        "name": "Reaction",
        "img": allergyTrackingHome,
        "description": "Full-stack web application to help you track your allergies or food intolerance, with logs organized by type of food for easy comparison. ",
        "techIcon": [jsIcon, reactIcon, sassIcon, cssIcon, nodeIcon, expressIcon, knexIcon, mysqlIcon],
        "techstack": ["Javascript" ,"React", "SASS ","CSS" ,"NodeJs","Express", "KnexJS","MySQL "],
        "links": [
            {
                "name": "visit site",
                "url": "https://track-reaction.netlify.com"
            },
            {
                "name": "Github",
                "url": "https://github.com/alisapromthep/alisa-promthep-reaction-client"
            },
        ],
        "casestudy": {
            "authentication & authorization": "JWT, building a back-end database to store user information",

        }
    },
    {
        "id": 2,
        "name": "Shutterstock",
        "img": shutterstockHome,
        "description": "A recreation of Shutterstock homepage with additional features section, and a new feature page, as a proof of concept. The project was done in collbaration between Web Developers and UX Designers.",
        "techIcon": [jsIcon, reactIcon, sassIcon, cssIcon],
        "techstack": ["Javascript"," React" ,"SASS ", "CSS" ],
        "tools": "used git for working simultaneously, figma to guide design",
        "links": [
            {
                "name":"DEMO",
                "url": "https://shutterstock-bstn-hackathon.netlify.app/"
            },
            {
                "name": "github",
                "url": "https://github.com/Orloaft/shutterstock-hackathon"
            },

        ]
    },
    {
        "id": 3,
        "name": "Virtual Wanderer",
        "img": virtualWanderHome,
        "description": "24 hours pair-programming: A full stack React web application that takes you on a leisure journey through different cities. We built a RESTApi, containing pre-selected youtube videos for the applications. ",
        "techIcon": [jsIcon, reactIcon, sassIcon, cssIcon,nodeIcon,expressIcon],
        "techstack": ["Javascript"," React" ,"SASS ", "CSS" , "NodeJs" ,"Express "],
        "links": [
            {
                "name": "VISIT SITE",
                "url": "https://virtual-wanderer.netlify.app"
            },
            {
                "name": "github",
                "url": "https://github.com/alisapromthep/virtual-wander"
            },

        ]
    },
    {
        "id": 4,
        "name": "Who's that Pokemon?",
        "img": whosthatpokemonHome,
        "description": "24 hours hackathon using the Pokemon API and Document Object Model(DOM) methodd to create a pokemon identification game.",
        "techIcon": [jsIcon,sassIcon,cssIcon],
        "techstack": ["Javascript"  ,"SASS", "CSS"],
        "links": [
            {
                "name": "VISIT SITE",
                "url": "https://whosthatpokemon-hackathon.netlify.app/"
            },
            {
                "name": "github",
                "url": "https://github.com/menu89/whos-that-pokmon"
            },

        ]
    },


];