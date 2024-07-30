import "./NavBar.scss";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare, FaTelegramPlane } from "react-icons/fa";

const NavBar = ({ handleScrollToAbout, handleScrollToProject, openModal }) => {
  return (
    <div className="nav">
      <Link className="nav__name" to="/">
        A.P.
      </Link>
      <ul className="nav__list">
        <li className="nav__link-item">
          <button
            className="nav__link nav__button"
            onClick={handleScrollToAbout}
          >
            About
          </button>
        </li>
        <li className="nav__link-item">
          <button
            className="nav__link nav__button"
            onClick={handleScrollToProject}
          >
            Projects
          </button>
        </li>
        <li className="nav__link-item">
          <a
            className="nav__link"
            href="/resume/alisapromthepresume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li className="nav__link-item">
          <button onClick={openModal} className="nav__button">
            <FaTelegramPlane className="nav__icon" size={"auto"} />
          </button>
        </li>
        <li className="nav__link-item">
          <a
            href="https://www.linkedin.com/in/alisa-promthep/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="nav__icon" size={"auto"} />
          </a>
        </li>
        <li className="nav__link-item">
          <a
            href="https://github.com/alisapromthep"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size={"auto"} className="nav__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
