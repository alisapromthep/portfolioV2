import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CaseStudyPage from './pages/CaseStudyPage/CaseStudyPage';
import React, {useRef, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Modal from 'react-modal';
import Connect from './components/Connect/Connect';
import Casestudy from './components/Casestudy/Casestudy';

function App() {

  const heroRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef();

  const [modalIsOpen, setIsOpen] = useState(false);

    const openModal=()=>{
        setIsOpen(true);
    }
    
    const closeModal=()=>{
        setIsOpen(false);
    };

  return (
    <BrowserRouter>
      <NavBar heroRef={heroRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef}
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
          <Route path='/' element={<HomePage heroRef={heroRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} openModal={openModal}/>}/>
          <Route path='/projects' element={<CaseStudyPage/>}>
            <Route path='/projects/:projectName' element={<Casestudy/>}/>
          </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
