import React from "react";
import "./Projectsection.scss";
import Project from "../Projects/Projects";

const ProjectSection = ({ projectsData, sectionTitle }) => {
  return (
    <section className="projects">
      <h2 className="projects__header">{sectionTitle || "Projects"}</h2>
      <div className="projects__box">
        {projectsData.map((project, index) => (
          <Project
            key={project.id}
            index={index}
            name={project.name}
            img={project.img}
            video={project.video}
            badge={project.badge}
            description={project.description}
            links={project.links}
            techIcon={project.techIcon}
            tech={project.techstack}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
