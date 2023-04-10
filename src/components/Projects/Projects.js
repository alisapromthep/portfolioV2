import './Projects.scss'
import { useInView } from 'react-intersection-observer';

const Projects = ({index,name,img,description,links,techIcon,tech}) => {

    const {ref:project, inView:projectInView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const windowWidth = window.innerWidth;
    return (
        <article ref={project} className={`project reveal ${projectInView ? 'reveal--active':''}`}>
            <div className='project__container'>
                    <div className='project__label-box'>
                        <div className='project__info-box'>
                            <div className='project__title-box'>
                                <p className='project__title'>{name}</p>
                            </div>
                            <p className='project__description'>{description}</p>
                            <div className='project__tech'>
                            {techIcon.map((icon,index)=>{
                                return (
                                    <img 
                                    className='project__tech-icon'
                                    key={index} src={icon} alt={tech[index]}/>
                                )
                            })}
                        </div>
                        </div>
                <div className='project__link-box'>
                {links.map((link,index)=>{
                    return (
                        <a key={index}className='project__link' href={link.url} target="_blank"
                        rel="noreferrer">{link.name}</a>
                    )
                })}
                </div>
                </div>
                <div className='project__img-container'>
                    <img 
                    className='project__img'
                    src={img}/>
                </div>
            </div>
        </article>
    )
}

export default Projects