import "./Aboutme.scss";
import { ReactComponent as Apwork } from "../../assets/images/ap-work-credit.svg";
import React from "react";
import { useInView } from "react-intersection-observer";
import { aboutMeData } from "../../data/aboutMeData";

const Aboutme = ({ aboutRef }) => {
  const { ref: aboutMe, inView: aboutMeInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { name, headline, bio, stats, skills, education, currently } =
    aboutMeData[0];

  return (
    <div ref={aboutRef}>
      <section
        ref={aboutMe}
        className={`aboutme reveal ${aboutMeInView ? "reveal--active" : ""}`}
      >
        <div className="aboutme__img-container">
          <Apwork className="aboutme__img" />
        </div>

        <div className="aboutme__textbox">
          <h2 className="aboutme__name">{name}</h2>
          <p className="aboutme__headline">{headline}</p>

          <p className="aboutme__bio">{bio}</p>

          <div className="aboutme__stats">
            {stats.map((stat, i) => (
              <div key={i} className="aboutme__stat">
                <span className="aboutme__stat-value">{stat.value}</span>
                <span className="aboutme__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="aboutme__skills">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="aboutme__skill-group">
                <span className="aboutme__skill-group-label">{group}</span>
                <div className="aboutme__tags">
                  {items.map((skill, i) => (
                    <span key={i} className={`aboutme__tag tag--purple`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="aboutme__education">
            {education.map((item, i) => (
              <div key={i} className="aboutme__edu-row">
                <span className="aboutme__edu-degree">
                  {item.degree}
                  {item.status && (
                    <span className="aboutme__edu-status">
                      {" "}
                      — {item.status}
                    </span>
                  )}
                </span>
                <span className="aboutme__edu-school">{item.school}</span>
              </div>
            ))}
          </div>

          <div className="aboutme__currently">
            <span className="aboutme__currently-label">currently</span>
            <p className="aboutme__currently-text">{currently}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
