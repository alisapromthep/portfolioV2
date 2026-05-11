import "./Projects.scss";

const Projects = ({
  index,
  name,
  img,
  video,
  badge,
  description,
  links,
  techIcon,
  tech,
}) => {
  return (
    <article className="project">
      <div className="project__container">
        <div className="project__label-box">
          <div className="project__info-box">
            <div className="project__title-box">
              {badge && <span className="project__badge">{badge}</span>}
              <p className="project__title">{name}</p>
            </div>
            <p className="project__description">{description}</p>

            {/* techIcon is optional — data projects may not have SVG icons */}
            {techIcon && techIcon.length > 0 && (
              <div className="project__tech">
                {techIcon.map((icon, i) => (
                  <img
                    className="project__tech-icon"
                    key={i}
                    src={icon}
                    alt={tech?.[i] ?? ""}
                  />
                ))}
              </div>
            )}

            {/* Fallback: render tech names as tags when no icons available */}
            {(!techIcon || techIcon.length === 0) &&
              tech &&
              tech.length > 0 && (
                <div className="project__tech project__tech--tags">
                  {tech.map((t, i) => (
                    <span key={i} className="project__tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
          </div>

          <div className="project__link-box">
            {links.map((link, i) => (
              <a
                key={i}
                className={`project__link ${i > 0 ? "project__link--secondary" : ""}`}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {video ? (
          <div className="project__video-container">
            <iframe
              src={video}
              className="project__video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={name}
            />
          </div>
        ) : img ? (
          <img
            className="project__img"
            src={img}
            alt={`Screenshot of ${name}`}
          />
        ) : null}
      </div>
    </article>
  );
};

export default Projects;
