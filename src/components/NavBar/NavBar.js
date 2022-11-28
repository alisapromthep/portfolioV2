import './NavBar.scss';
import FixNav from '../FixNav/FixNav';
import {Link} from 'react-router-dom';

const NavBar = ({handleScrollToAbout, handleScrollToProject, openModal}) => {
    return (
        <div className='nav'>
            <Link to='/' className='nav__name'>A.P.</Link>
            <Link to='/' className='nav__name--tablet'>Alisa Promthep</Link>
            <FixNav handleScrollToAbout={handleScrollToAbout} handleScrollToProject={handleScrollToProject} openModal={openModal} />
        </div>
    )
}

export default NavBar