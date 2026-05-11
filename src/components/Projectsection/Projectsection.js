import React from "react";
import "./Projectsection.scss";
import Project from "../Projects/Projects";
import { ReactComponent as ApProject } from "../../assets/images/ap-project-credit.svg";

const ProjectSection = ({ projectsData, sectionTitle }) => {
  return (
    <section className="projects">
      <div className="projects__header">
        <ApProject className="projects__img" />
        <h2 className="projects__headline">{sectionTitle || "Projects"}</h2>
      </div>
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
