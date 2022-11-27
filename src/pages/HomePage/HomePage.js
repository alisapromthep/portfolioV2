import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Aboutme from '../../components/Aboutme/Aboutme';
import Projectsection from '../../components/Projectsection/Projectsection';
import Connect from '../../components/Connect/Connect';
import React, {useState} from "react";
import Modal from 'react-modal';


function HomePage({aboutRef, projectRef}) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal=()=>{
        setIsOpen(true);
    }
    
    const closeModal=()=>{
        setIsOpen(false);
    }
    
    return (
        <main className='homepage'>
            <Modal
            className='modal'
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            >
                <Connect closeModal={closeModal}/>
            </Modal>
            <Hero openModal={openModal}/>
            <Aboutme aboutRef={aboutRef}/>
            <Projectsection projectRef={projectRef}/>
        </main>
    )
}

export default HomePage