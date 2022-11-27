import './NavBar.scss';
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const NavBar = ({handleScrollToAbout, handleScrollToProject}) => {
    return (
        <div className='nav'>
            <Link to='/' className='nav__name'>A.P.</Link>
            <Link to='/' className='nav__name--tablet'>Alisa Promthep</Link>
            <ul className='nav__list'>
                <li className='nav__link-item'>
                    <a className='nav__link'
                    onClick={handleScrollToAbout}
                    >About</a>
                    </li>
                <li className='nav__link-item'>
                    <a className='nav__link'
                    onClick={handleScrollToProject}>Projects</a>
                    </li>
                <li className='nav__link-item'>
                    <a
                className='nav__link'
                href="https://docs.google.com/document/d/e/2PACX-1vSE8GB9wynWs1sdh-r0mueZmOwiHMzscNesOOJChC4kMtlIJkeT_kravPNAwASnqcSS1SLA8gimdiZ0/pub"
                target="_blank"
                rel="noopener">
                    Resume
                    </a>
                    </li>
                <li className='nav__link-item'>
                    <a href="https://www.linkedin.com/in/alisa-promthep/"
                target="_blank"
                rel="noopener"><FaLinkedin className='nav__icon' size={'auto'}/></a>
                </li>
                <li className='nav__link-item'><a 
                href="https://github.com/alisapromthep"
                target="_blank"
                rel="noopener">
                <FaGithubSquare size={'auto'} className='nav__icon'/>
                </a></li>
            </ul>
        </div>
    )
}

export default NavBar