import './App.scss';
import Hero from './components/Hero/Hero';
import Aboutme from './components/Aboutme/Aboutme';
import Projectsection from './components/Projectsection/Projectsection';
import Connect from './components/Connect/Connect';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import React, {useRef} from "react";

function App() {

  const connectRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  const handleScrollToConnect = ()=>{
    window.scrollTo({top: connectRef.current.offsetTop, behavior:'smooth'});
  };

  return (
    <>
      <NavBar/>
      <main>
        <Hero handleScrollToConnect={handleScrollToConnect}/>
        <Aboutme aboutRef={aboutRef}/>
        <Projectsection projectRef={projectRef}/>
        <Connect connectRef={connectRef} />
      </main>
      <Footer/>
    </>
  );
}

export default App;
