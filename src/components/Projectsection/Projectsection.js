import React from 'react';
import './Projectsection.scss';
import Project from '../Projects/Projects';
import {projectData} from '../../data/projectData';
import { hackathonData } from '../../data/hackathonData';
import {ReactComponent as ApProject} from '../../assets/images/ap-project-credit.svg';


const ProjectSection = ({projectRef}) => {
    
    return (
        <section ref={projectRef}className='projects'>
            <div className='projects__header'>
                <ApProject className='projects__img'/>
            </div>
                <div>
                    <h2 className='projects__headline'>Hackathons</h2>
                    <div className='projects__box'>
                    {
                        hackathonData.map((item,index)=>{
                            return (
                                <Project
                                    key={index}
                                    name={item.name}
                                    img={item.img}
                                    description={item.description}
                                    links={item.links}
                                    techIcon={item.techIcon}
                                    tech={item.techstack}
                                />
                            )
                        })
                    }

                    </div>
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