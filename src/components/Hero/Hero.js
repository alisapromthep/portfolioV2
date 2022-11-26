import './Hero.scss';
import {ReactComponent as Apwork} from '../../assets/images/ap-work.svg';

const Hero = ({handleScrollToConnect}) => {

    return (
        <section className='hero'>
            <div className='hero__textbox'>
                <h1 className='hero__headline'>
                    <span className='hero__headline--smaller'>I'm Alisa, a </span>Software Developer.</h1>
                <p className='hero__tagline'>I love building digital products, with dreams and ambition to build tools, or applications for better lives. A side from technology, I am passionate in art, science and education. </p>
                <button className='hero__button'
                onClick={handleScrollToConnect}
                >Send me a message</button>
            </div>
            <Apwork className='hero__img'/>
        </section>
    )
}

export default Hero