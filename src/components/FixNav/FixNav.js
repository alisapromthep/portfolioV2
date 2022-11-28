import './FixNav.scss';
import {FaLinkedin, FaGithubSquare, FaTelegramPlane} from 'react-icons/fa';

function FixNav({handleScrollToAbout, handleScrollToProject, openModal}) {
    return (
        <div className='fixnav'>
            <ul className='nav__list'>
                <li className='nav__link-item'>
                    <button className='nav__link nav__button'
                    onClick={handleScrollToAbout}
                    >About</button>
                    </li>
                <li className='nav__link-item'>
                    <button className='nav__link nav__button'
                    onClick={handleScrollToProject}>Projects</button>
                    </li>
                <li className='nav__link-item'>
                    <a
                className='nav__link'
                href="https://docs.google.com/document/d/e/2PACX-1vSE8GB9wynWs1sdh-r0mueZmOwiHMzscNesOOJChC4kMtlIJkeT_kravPNAwASnqcSS1SLA8gimdiZ0/pub"
                target="_blank"
                rel="noreferrer">
                    Resume
                    </a>
                </li>
                <li className='nav__link-item'><button onClick={openModal}className='nav__button'><FaTelegramPlane className='nav__icon' size={'auto'}/></button></li>
                <li className='nav__link-item'>
                    <a href="https://www.linkedin.com/in/alisa-promthep/"
                target="_blank"
                rel="noreferrer"><FaLinkedin className='nav__icon' size={'auto'}/></a>
                </li>
                <li className='nav__link-item'><a 
                href="https://github.com/alisapromthep"
                target="_blank"
                rel="noreferrer">
                <FaGithubSquare size={'auto'} className='nav__icon'/>
                </a></li>
            </ul>
        </div>
    )
}

export default FixNav