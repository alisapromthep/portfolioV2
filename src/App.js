import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CaseStudyPage from './pages/CaseStudyPage/CaseStudyPage';
import React, {useRef} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  const aboutRef = React.createRef();
  const projectRef = useRef(null);

  const handleScrollToAbout =()=>{
    aboutRef.current.scrollIntoView({block:'start',bahavior:'smooth',inline:'nearest'});
    }

    const handleScrollToProject =()=>{
    window.scrollTo({top: projectRef.current.offsetTop, behavior:'smooth'});
    }

  return (
    <BrowserRouter>
      <NavBar handleScrollToAbout={handleScrollToAbout}
      handleScrollToProject={handleScrollToProject}/>
      <Routes>
        <Route path='/' element={<HomePage aboutRef={aboutRef} projectRef={projectRef}/>}/>
        <Route path='/projects' element={<CaseStudyPage/>}>
          <Route path='/projects/:projectName' element='project'/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
