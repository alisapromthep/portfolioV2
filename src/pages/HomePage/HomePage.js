import "./HomePage.scss";
import Projectsection from "../../components/Projectsection/Projectsection";
import Landing from "../../components/Landing/Landing";

import React from "react";

function HomePage({ aboutRef, projectRef, openModal }) {
  return (
    <main className="homepage">
      <Landing aboutRef={aboutRef} openModal={openModal} />
      <Projectsection projectRef={projectRef} />
    </main>
  );
}

export default HomePage;
