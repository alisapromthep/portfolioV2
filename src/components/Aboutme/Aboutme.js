import './Aboutme.scss';
import React from 'react';

const Aboutme = ({aboutRef}) => {

    return (
            <section className='aboutme'>
                <div className='aboutme__textbox'>
                    <h2>About Me</h2>
                    <p className='aboutme__description'>From chemistry lab bench to programming, my passion for creating, problem-solving, and learning continues to flourish. I’m excited to combine my past experiences in teaching and as a R&D chemist to tackle new problems and contribute to new technologies which promote education.</p>
                    <p className='aboutme__description'> <span>Fun Fact:</span> I’ve lived in three different continents, Asia, Europe and North America</p>
                </div>
            </section>
    )
}

export default Aboutme