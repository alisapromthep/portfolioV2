import './Aboutme.scss';
import apphoto from '../../assets/images/ap1.JPG';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Aboutme = ({aboutRef}) => {
    const {ref: aboutMe, inView: aboutMeInView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div ref={aboutRef}>
            <section ref={aboutMe} className={`aboutme reveal ${aboutMeInView ? 'reveal--active':''}`}>
                <div className='aboutme__img-box'>
                    <div className='aboutme__img-container'>
                        <img 
                        className='aboutme__img' src={apphoto}/>
                    </div>
                </div>
                <div className='aboutme__textbox'>
                    <h2>About Me</h2>
                    <p className='aboutme__description'>From chemistry lab bench to programming, my passion for creating, problem-solving, and learning continues to flourish. I’m excited to combine my past experiences in teaching and R&D chemist to tackle new problems and contribute to new technologies that promotes education.</p>
                    <p className='aboutme__description'> <span>Fun Fact:</span> I’ve lived in three different cities, Bangkok, Thailand, Brussels, Belgium and Toronto, Canada. </p>

                </div>
            </section>
        </div>
    )
}

export default Aboutme