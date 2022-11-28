import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Aboutme from '../../components/Aboutme/Aboutme';
import Projectsection from '../../components/Projectsection/Projectsection';

import React from "react";



function HomePage({aboutRef, projectRef, openModal}) {

    
    return (
        <main className='homepage'>
            <Hero openModal={openModal}/>
            <Aboutme aboutRef={aboutRef}/>
            <Projectsection projectRef={projectRef}/>
        </main>
    )
}

export default HomePage