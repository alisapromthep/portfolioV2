import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CaseStudyPage from './pages/CaseStudyPage/CaseStudyPage';
import React, {useRef, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoaderPage from './pages/LoaderPage/LoaderPage';
import Modal from 'react-modal';
import Connect from './components/Connect/Connect';
import Casestudy from './components/Casestudy/Casestudy';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const aboutRef = React.createRef();
  const projectRef = useRef(null);

  const handleScrollToAbout =()=>{
    window.scrollTo({top: aboutRef.current.offsetTop, behavior:'smooth'});
    }

    const handleScrollToProject =()=>{
    window.scrollTo({top: projectRef.current.offsetTop, behavior:'smooth'});
    }

    const openModal=()=>{
        setIsOpen(true);
    }
    
    const closeModal=()=>{
        setIsOpen(false);
    };

  return (
    <BrowserRouter>
      <NavBar handleScrollToAbout={handleScrollToAbout}
      handleScrollToProject={handleScrollToProject}
      openModal={openModal}
      />
      <Modal
      className='modal'
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel='form to send message to alisa'
      >
        <div>
          <Connect closeModal={closeModal}/>
        </div>
      </Modal>
      <Routes>
        <Route path='/' element={<HomePage aboutRef={aboutRef} projectRef={projectRef} openModal={openModal}/>}/>
        <Route path='/projects' element={<CaseStudyPage/>}>
          <Route path='/projects/:projectName' element={<Casestudy/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
