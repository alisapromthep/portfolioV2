import React from 'react';
import './Projectsection.scss';
import Project from '../Projects/Projects';
import girlOnTheFloor from '../../assets/images/girlworking.png';
import {projectData} from '../../data/projectData';


const ProjectSection = ({projectRef}) => {
    
    return (
        <section ref={projectRef}className='projects'>
        <img src={girlOnTheFloor} alt="girl working on the floor with a laptop and paper spread out"
        className='projects__img'
        />
        <h2 className='projects__headline'>Projects</h2>
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