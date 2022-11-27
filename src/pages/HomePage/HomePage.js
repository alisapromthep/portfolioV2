import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Aboutme from '../../components/Aboutme/Aboutme';
import Projectsection from '../../components/Projectsection/Projectsection';
import Connect from '../../components/Connect/Connect';
import React, {useRef} from "react";

function HomePage({aboutRef, projectRef}) {
    const connectRef = useRef(null);

    
    const handleScrollToConnect = ()=>{
    window.scrollTo({top: connectRef.current.offsetTop, behavior:'smooth'});
    };

    
    return (
        <main>
            <Hero handleScrollToConnect={handleScrollToConnect}/>
            <Aboutme aboutRef={aboutRef}/>
            <Projectsection projectRef={projectRef}/>
            <Connect connectRef={connectRef} />
        </main>
    )
}

export default HomePage