import './Hero.scss';
import {ReactComponent as Apwork} from '../../assets/images/ap-work.svg';
import {FaTelegramPlane, FaArrowDown} from 'react-icons/fa';
import ArtCredit from '../ArtCredit/ArtCredit';

const Hero = ({openModal}) => {

    return (
        <div className='hero__container'>
            <section className='hero'>
                <div>
                    <Apwork className='hero__img'/>
                    <p className='hero__art-credit'> By Nyche</p>
                </div>
                <div className='hero__textbox'>
                    <h1 className='hero__headline'>
                        <span className='hero__headline--smaller'>Hi! I'm Alisa, a </span> <span className='hero__headline--color'>Software Developer.</span></h1>
                    <p className='hero__tagline'> A cosmetic chemist turned developer, building and designing to make a positive impact.</p>
                    <button className='hero__button'
                    onClick={openModal}
                    >Send me a message <FaTelegramPlane className='button__icon'/></button>
                    <FaArrowDown className='hero__arrow-down'/>
                    
                </div>
            </section>
        </div>
    )
}

export default Hero