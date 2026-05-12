import "./HomePage.scss";
import ProjectSection from "../../components/Projectsection/Projectsection";
import Landing from "../../components/Landing/Landing";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import { projectData } from "../../data/projectData";
import { dataProjectData } from "../../data/dataProjectData";
import React, { useState, useEffect, useRef } from "react";

const featuredWebProjects = projectData.filter((p) => p.featured);
const featuredDataProjects = dataProjectData.filter((p) => p.featured);
const featuredProjects = [...featuredWebProjects, ...featuredDataProjects];

function HomePage({ activeSection, openModal }) {
  // Track previous section so we can animate the direction of the turn
  const prevSection = useRef(activeSection);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (prevSection.current !== activeSection) {
      prevSection.current = activeSection;
      // Bump key to remount the section wrapper and re-trigger the animation
      setAnimKey((k) => k + 1);
    }
  }, [activeSection]);

  return (
    <main className={`homepage homepage--${activeSection}`}>
      <div key={animKey} className="homepage__section homepage__section--turn">
        {activeSection === "about" && (
          <>
            <Landing openModal={openModal} />
          </>
        )}

        {activeSection === "data" && (
          <ProjectSection
            projectsData={dataProjectData}
            sectionTitle="Data Projects"
          />
        )}

        {activeSection === "web" && (
          <ProjectSection
            projectsData={projectData}
            sectionTitle="Web Projects"
          />
        )}
      </div>
    </main>
  );
}

export default HomePage;
