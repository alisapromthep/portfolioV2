import './Projects.scss'
import { useInView } from 'react-intersection-observer';

import React from 'react';

const Projects = ({index,name,img,description,links,techIcon,tech}) => {

    const {ref:project, inView:projectInView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const windowWidth = window.innerWidth;
    return (
        <article ref={project} className={`project reveal ${projectInView ? 'reveal--active':''}`}>
            <div className={`project__container ${index%2 === 0 ? 'project__container--invert':''}`}>
                    <img 
                    className='project__img'
                    src={img}/>
                    <div className='project__label-box'>
                        <p>{name}</p>
                        <p>{description}</p>
                        {windowWidth < 779 ?                     
                        <ul className='project__tech-listbox'>
                            {tech.map((name,index)=>{
                                return (
                                    <li key={index} className='project__tech-list'>{name}</li>
                                )
                            })}
                        </ul> : 
                            <div className='project__tech'>
                            {techIcon.map((icon,index)=>{
                                return (
                                    <img 
                                    className='project__tech-icon'
                                    key={index} src={icon} alt={tech[index]}/>
                                )
                            })}

                        </div>
                        } 
                </div>
            </div>
            <div className={`project__link-box ${index%2 === 0 ? 'project__link-box--reverse':''}`}>
            {links.map((link,index)=>{
                return (
                    <a key={index}className='project__link' href={link.url}>{link.name}</a>
                )
            })}
            </div>
        </article>
    )
}

export default Projects