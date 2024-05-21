import tailwindIcon from '../assets/icons/tailwindcss-icon.svg';
import typescriptIcon from '../assets/icons/typescript-icon.svg';
import firebaseIcon from '../assets/icons/firebase.svg';
import nextIcon from '../assets/icons/nextjs-icon.svg';
import solarsyncBanner from '../assets/projects/solarsync-winner.png';
import shutterstockHome from '../assets/projects/shutterstock-homepage.png';
import cssIcon from '../assets/icons/css-3.svg';
import jsIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import sassIcon from '../assets/icons/sass.svg';

export const hackathonData = [
    {
        "id": 1,
        "name": "Solar Sync",
        "img": solarsyncBanner,
        "description": "First Place Winner of Girls Who Code: Hack for Environment: Developed an user-friendly platform to connect EV car users, rent out and  booking charging stations  with additional encouragement  to use solar-powered charging stations.",
        "techIcon": [typescriptIcon, nextIcon, tailwindIcon, firebaseIcon],
        "techstack": ["TypeScript","NextJS" ,"TailwindCSS ", "Firebase" ],
        "tools": "used git for working simultaneously, figma to guide design",
        "links": [
            {
                "name":"DEMO",
                "url": "https://solar-sync.vercel.app/"
            },
            {
                "name": "github",
                "url": "https://github.com/solarsync23/solarsync/tree/main"
            },
            {
                "name": "Presentation",
                "url": "https://devpost.com/software/solar-sync"
            }

        ],
        "casestudy": {
            "purpose": "",
            "challenges": "",
        }
    },
    {
        "id": 2,
        "name": "Shutterstock",
        "img": shutterstockHome,
        "description": "First Place Winner of Shutterstock x BrainStation Hackathon: A recreation of Shutterstock homepage with additional features section, and a new feature page, as a proof of concept. The project was done in collbaration between Web Developers and UX Designers.",
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

        ],
        "casestudy": {
            "purpose": "",
            "challenges": "",
        }
    },
]