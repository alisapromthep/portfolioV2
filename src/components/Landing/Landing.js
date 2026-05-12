import "./Landing.scss";
import { ReactComponent as Apwork } from "../../assets/images/ap-work-credit.svg";
import { FaTelegramPlane, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { aboutMeData } from "../../data/aboutMeData";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import { projectData } from "../../data/projectData";
import { dataProjectData } from "../../data/dataProjectData";

const featuredDataProjects = dataProjectData.filter((p) => p.featured);
const featuredWebProjects = projectData.filter((p) => p.featured);
const featuredProjects = [...featuredDataProjects, ...featuredWebProjects];

const Landing = ({ openModal }) => {
  const { bio, stats, currently } = aboutMeData[0];

  return (
    <section className="landing">
      <div className="landing__illustration">
        <Apwork className="landing__img" />
      </div>

      <div className="landing__content">
        <div className="landing__intro">
          <p className="landing__greeting">Hi, I'm</p>
          <h1 className="landing__name">Alisa Promthep</h1>
          <p className="landing__tagline">
            Chemistry + code = better product decisions
          </p>
        </div>

        <p className="landing__bio">{bio}</p>

        <div className="landing__stats">
          {stats.map((stat, i) => (
            <div key={i} className="landing__stat">
              <span className="landing__stat-value">{stat.value}</span>
              <span className="landing__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* <p className="landing__currently">{currently}</p> */}

        <div className="landing__actions">
          <div className="landing__social">
            <a
              href="https://www.linkedin.com/in/alisa-promthep/"
              target="_blank"
              rel="noreferrer"
              className="landing__social-link"
            >
              <FaLinkedin className="landing__social-icon" />
            </a>
            <a
              href="https://github.com/alisapromthep"
              target="_blank"
              rel="noreferrer"
              className="landing__social-link"
            >
              <FaGithubSquare className="landing__social-icon" />
            </a>
            <button className="landing__button" onClick={openModal}>
              Send me a message <FaTelegramPlane className="button__icon" />
            </button>
          </div>
        </div>
        <div>
          {featuredProjects.length > 0 && (
            <FeaturedProjects projects={featuredProjects} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Landing;
