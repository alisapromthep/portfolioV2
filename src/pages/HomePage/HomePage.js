import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import Aboutme from "../../components/Aboutme/Aboutme";
import Projectsection from "../../components/Projectsection/Projectsection";
import Landing from "../../components/Landing/Landing";

import React from "react";

function HomePage({ aboutRef, projectRef, openModal }) {
  return (
    <main className="homepage">
      <Landing aboutRef={aboutRef} openModal={openModal} />
      {/* <Hero openModal={openModal} />
      <Aboutme aboutRef={aboutRef} /> */}
      <Projectsection projectRef={projectRef} />
    </main>
  );
}

export default HomePage;
