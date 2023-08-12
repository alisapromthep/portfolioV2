import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Aboutme from '../../components/Aboutme/Aboutme';
import Projectsection from '../../components/Projectsection/Projectsection';

import React from "react";



function HomePage({aboutRef, projectRef, openModal}) {

    const components = [
   { component: <Hero openModal={openModal}/>,
    class: 'section__top'},
    {component: <Aboutme aboutRef={aboutRef}/>,
    class: 'section__middle'},
    {component: <Projectsection projectRef={projectRef}/>,
class: 'section__bottom'}
]

    
    return (
        <main className='homepage'>
                {components.map((component,i)=>{
                    return (
                        <section className={`homepage__section ${component.class}`}
                        key={i}
                        >
                            {component.component}
                        </section>
                    )
                })}
        </main>
    )
}

export default HomePage