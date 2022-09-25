import './Hero.scss';
import React from 'react';
import girl from '../../assets/images/girllaptop.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__textbox'>
                <h1 className='hero__headline'>Full Stack Developer</h1>
                <p className='hero__tagline'>I turn design into functioning website. A former chemist, turn developer! 
                I building, designing to make lives easier. </p>
                <button className='hero__button'>Let's connect</button>
            </div>
            <img
            className='hero__img'
            src={girl} alt="girl on a high chair working with a laptop on her lap"/>
        </div>
    )
}

export default Hero