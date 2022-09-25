import './Projects.scss'


import React from 'react';

const Projects = ({name,img,description,links,techIcon,tech}) => {

    const windowWidth = window.innerWidth;
    return (
        <article className='project'>
            <div className='project__container'>
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
                    <div className='project__link-box'>
                        {links.map((link,index)=>{
                            return (
                                <a key={index}className='project__link' href={link.url}>{link.name}</a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Projects