import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Aboutme from '../../components/Aboutme/Aboutme';
import Projectsection from '../../components/Projectsection/Projectsection';
import {ReactComponent as Apwork} from '../../assets/images/ap-work-credit.svg';
import {ReactComponent as ApProject} from '../../assets/images/ap-project-credit.svg';
import {useRef} from 'react';
import React from "react";



function HomePage({aboutRef, projectRef, openModal}) {

    const heroRef = useRef();

    return (
        <main className='homepage'>
                <section ref={heroRef}
                className='section section__top'
                >
                    <div className='hero__img-box'>
                        <Apwork className='hero__img'/>
                    </div>
                        <Hero openModal={openModal}/>
                </section>
                <section
                className='section section__middle'
                >
                    <div className='hero__img-box'>
                        <Apwork className='hero__img'/>
                    </div>
                        <Aboutme />
                </section>
                <section
                className='section section__bottom'
                >
                    <div className='hero__img-box'>
                        <ApProject className='hero__img'/>
                    </div>
                        <Projectsection/>
                </section>
        </main>
    )
}

export default HomePage