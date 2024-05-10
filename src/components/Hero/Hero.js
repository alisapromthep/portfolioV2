import './Hero.scss';
import {FaTelegramPlane, FaArrowDown, FaLongArrowAltRight } from 'react-icons/fa';

const Hero = ({openModal}) => {

    return (
        <div className='hero__container'>
            <section className='hero'>
                <div className='hero__textbox'>
                <div className='hero__headline-box hero__box-main'>
                    <h1 className='hero__headline'>
                        <span className='hero__headline--smaller'>Hi! I'm Alisa, a </span>
                        <span className='hero__headline--color'>Software Developer.</span>
                    </h1>
                    <p className='hero__tagline'> A cosmetic chemist turned developer, building and designing to make a positive impact.</p>
                </div>
                    <button className='hero__button'
                    onClick={openModal}
                    >Send me a message <FaLongArrowAltRight className='button__icon'/></button>
                </div>
            </section>
        </div>
    )
}

export default Hero