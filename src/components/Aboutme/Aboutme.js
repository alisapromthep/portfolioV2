import './Aboutme.scss';
import apphoto from '../../assets/images/ap1.JPG';
import React from 'react'

const Aboutme = () => {
    return (
        <section className='aboutme'>
            <div className='aboutme__img-box'>
                <div className='aboutme__img-decor'></div>
                <div className='aboutme__img-container'>
                    <img className='aboutme__img' src={apphoto}/>
                </div>
            </div>
            <div className='aboutme__textbox'>
                <h2 className= 'aboutme__headline'>About Me</h2>
                <p className='aboutme__description'>From the chemistry lab bench to coding, my passion for creating, problem-solving, and learning continues to flourish. I’m excited to combine my past experiences in teaching and as an R&D chemist to tackle new problems and contribute to new technologies.</p>

            </div>
        </section>
    )
}

export default Aboutme