import './CaseStudyPage.scss';
import {projectData} from '../../data/projectData';
import { NavLink, Outlet, Link } from 'react-router-dom';
import CaseStudy from '../../components/Casestudy/Casestudy';


function CaseStudyPage() {
    return (
        <div>
            <nav>
                <ul>
                    {projectData.map(project=> <NavLink className='casestudy__navlink'>{project.name}</NavLink>)}
                </ul>
            </nav>
            <div className='casestudy__project-container'>
                {projectData.map((project)=>{
                    return (
                    <Link className='casestudy__link'>
                        <div className='casestudy__img-container'>
                            <img className='casestudy__img' src={project.img} alt={project.name}/>
                        </div>
                    </Link>
                    )
                })}
            </div>
            <Outlet/>
        </div>
    )
}

export default CaseStudyPage