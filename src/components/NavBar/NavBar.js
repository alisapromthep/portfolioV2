import './NavBar.scss';
import FixNav from '../FixNav/FixNav';
import {Link} from 'react-router-dom';

const NavBar = ({handleScrollToAbout, handleScrollToProject}) => {
    return (
        <div className='nav'>
            <Link to='/' className='nav__name'>A.P.</Link>
            <Link to='/' className='nav__name--tablet'>Alisa Promthep</Link>
            <FixNav handleScrollToAbout={handleScrollToAbout} handleScrollToProject={handleScrollToAbout}/>
        </div>
    )
}

export default NavBar