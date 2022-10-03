import './NavBar.scss';
import React from 'react'
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';

const NavBar = ({handleScrollToAbout, handleScrollToProject}) => {
    return (
        <div className='nav'>
            <p className='nav__name'>A.P.</p>
            <p className='nav__name--tablet'>Alisa Promthep</p>
            <div>
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
                    <li className='nav__link-item nav__icon'>
                        <a href="https://www.linkedin.com/in/alisa-promthep/"
                    target="_blank"
                    rel="noopener"><FaLinkedin color="#F5EAE5" size={20}/></a>
                    </li>
                    <li className='nav__link-item nav__icon'><a 
                    href="https://github.com/alisapromthep"
                    target="_blank"
                    rel="noopener">
                    <FaGithubSquare color="#F5EAE5" size={20}/>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar