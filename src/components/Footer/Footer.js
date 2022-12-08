import './Footer.scss';
import {FaInstagramSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__text'>Made with ♡ by Alisa & Art by Nyche</p>
            <a className='footer__link' href='https://www.instagram.com/shiny_waka/'><FaInstagramSquare/></a>
        </footer>
    )
}

export default Footer