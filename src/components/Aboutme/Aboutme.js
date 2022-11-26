import './Aboutme.scss';
import apphoto from '../../assets/images/ap1.JPG';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Aboutme = ({aboutRef}) => {
    const {ref: aboutMe, inView: aboutMeInView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <section ref={aboutMe} className={`aboutme reveal ${aboutMeInView ? 'reveal--active':''}`}>
            <div ref={aboutRef}className='aboutme__img-box'>
                <div className='aboutme__img-decor'></div>
                <div className='aboutme__img-container'>
                    <img 
                    className='aboutme__img' src={apphoto}/>
                </div>
            </div>
            <div className='aboutme__textbox'>
                <h2>About Me</h2>
                <p className='aboutme__description'>From the chemistry lab bench to coding, my passion for creating, problem-solving, and learning continues to flourish. I’m excited to combine my past experiences in teaching and as an R&D chemist to tackle new problems and contribute to new technologies.</p>
                <p className='aboutme__description'> <span>Fun Fact:</span> I’ve lived on three different continents, I spent my early years in Bangkok, Thailand, my middle and high school years in Brussels, Belgium and my university and professional life in Toronto, Canada. </p>

            </div>
        </section>
    )
}

export default Aboutme