import './Hero.scss';
import {ReactComponent as Apwork} from '../../assets/images/ap-work.svg';

const Hero = ({handleScrollToConnect}) => {

    return (
        <section className='hero'>
            <div className='hero__textbox'>
                <h1 className='hero__headline'>
                    <span className='hero__headline--smaller'>I'm Alisa, a </span>Software Developer.</h1>
                <p className='hero__tagline'> A former chemist, turned developer, building and designing to make lives easier!</p>
                <button className='hero__button'
                onClick={handleScrollToConnect}
                >Send me a message</button>
            </div>
            <Apwork className='hero__img'/>
        </section>
    )
}

export default Hero