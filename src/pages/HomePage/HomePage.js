import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Aboutme from '../../components/Aboutme/Aboutme';
import Projectsection from '../../components/Projectsection/Projectsection';
import {ReactComponent as Apwork} from '../../assets/images/ap-work-credit.svg';
import {ReactComponent as ApProject} from '../../assets/images/ap-project-credit.svg';
import React, {useRef} from "react";
import {motion, useScroll, useTransform} from 'framer-motion';

function HomePage({heroRef, aboutMeRef, projectsRef, openModal}) {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target:heroRef,
        offset:['start start', 'end start']
    });

    const textY = useTransform(scrollYProgress, [0,1], ["0","200%"]);

    return (
        <main className='homepage'>
                <section ref={heroRef}
                className='section section__top'
                >
                    <div className='hero__img-box'>
                        <Apwork className='hero__img'/>
                    </div>
                    <motion.div style={{y:textY}}>
                        <Hero openModal={openModal}/> 
                    </motion.div>
                </section>
                <section
                ref={aboutMeRef}
                className='section section__middle'
                >
                    <div className='hero__img-box'>
                        <Apwork className='hero__img'/>
                    </div>
                        <Aboutme />
                </section>
                <section
                ref={projectsRef}
                className='section section__bottom'
                >
                    {/* <div className='hero__img-box'>
                        <ApProject className='hero__img'/>
                    </div> */}
                        <Projectsection />
                </section>
        </main>
    )
}

export default HomePage