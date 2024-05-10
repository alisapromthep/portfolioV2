import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Aboutme from '../../components/Aboutme/Aboutme';
import Projectsection from '../../components/Projectsection/Projectsection';
import Connect from '../../components/Connect/Connect';
import {ReactComponent as Apwork} from '../../assets/images/ap-work-credit.svg';
import {ReactComponent as ApProject} from '../../assets/images/ap-project-credit.svg';
import React, {useRef} from "react";
import {motion, useScroll, useTransform} from 'framer-motion';


function HomePage({heroRef, aboutMeRef, projectsRef, openModal}) {

    const ref = useRef(null);

    return (
        <main className='homepage'>
            <div className='background__farthest'>
                <section ref={heroRef}
                className='section section__top'
                >
                    <Hero openModal={openModal}/> 
                </section>
                <section
                ref={aboutMeRef}
                className='section section__middle'
                >
                    <div className='hero__img-box'>
                    </div>
                        <Aboutme />
                </section>
                <section
                ref={projectsRef}
                className='section section__bottom'
                >
                    <Projectsection />
                </section>
                <section>
                    <Connect/>
                </section>
            </div>
        </main>
    )
}

export default HomePage