import React from 'react';
import './Projectsection.scss';
import Project from '../Projects/Projects';
import {projectData} from '../../data/projectData';



const ProjectSection = () => {
    
    return (
        <section className='projects'>
            <div className='projects__header'>
                <h2 className='projects__headline'>Projects</h2>
            </div>
        <div className='projects__box'>
            {projectData.map((project,index)=>{
                return (
                    <Project key={index} 
                    index={index}
                    name={project.name}
                    img={project.img}
                    description={project.description}
                    links={project.links}
                    techIcon={project.techIcon}
                    tech={project.techstack}
                    />
                )
            })}
        </div>
    </section>
    )
    }

export default ProjectSection