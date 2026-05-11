import "./FeaturedProjects.scss";

const FeaturedProjects = ({ projects }) => {
  return (
    <section className="featured">
      <div className="featured__header">
        <span className="featured__label">Highlighted Work</span>
        <div className="featured__rule" />
      </div>

      <div className="featured__grid">
        {projects.map((project) => (
          <article key={project.id} className="featured__card">
            <span className="featured__badge">{project.badge}</span>

            <div className="featured__body">
              <h3 className="featured__name">{project.name}</h3>
              <p className="featured__tagline">{project.tagline}</p>
            </div>

            <div className="featured__links">
              {project.links.slice(0, 2).map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`featured__link ${i > 0 ? "featured__link--secondary" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
