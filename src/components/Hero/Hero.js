import "./Hero.scss";
import { ReactComponent as Apwork } from "../../assets/images/ap-work-credit.svg";
import { FaTelegramPlane, FaArrowDown } from "react-icons/fa";

const Hero = ({ openModal }) => {
  return (
    <div className="hero__container">
      <section className="hero">
        <div className="hero__img-box">
          <Apwork className="hero__img" />
        </div>
        <div className="hero__textbox">
          <h1 className="hero__headline">
            <span className="hero__headline--smaller">Hi! I'm Alisa, a</span>
            <span className="hero__headline--color">Chemist who codes</span>
          </h1>
          <p className="hero__tagline">
            Now working at the intersection of product, data, and strategy —
            helping teams make smarter decisions faster.
          </p>
          <button className="hero__button" onClick={openModal}>
            Send me a message <FaTelegramPlane className="button__icon" />
          </button>
          <FaArrowDown className="hero__arrow-down" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
