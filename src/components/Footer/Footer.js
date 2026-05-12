import "./Footer.scss";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = ({ openModal }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">Alisa Promthep</p>
        <p className="footer__tagline">
          Chemistry + code = better product decisions
        </p>

        <div className="footer__links">
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/alisa-promthep/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="footer__icon" />
            LinkedIn
          </a>
          <a
            className="footer__link"
            href="https://github.com/alisapromthep"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare className="footer__icon" />
            GitHub
          </a>
          <button
            className="footer__link footer__link--button"
            onClick={openModal}
            aria-label="Send a message"
          >
            <MdEmail className="footer__icon" />
            Contact
          </button>
        </div>

        <p className="footer__copy">
          © {year} Alisa Promthep — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
