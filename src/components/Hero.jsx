import classes from '../modules/Hero.module.scss'
import layout from '../modules/Layout.module.scss'
import hero from '../assets/hero.jpg'

const Hero = () => {

	return <>
		<section className={`${classes['hero-wrapper']} ${layout['container']}`}>
			<figure>
				<img src={hero} alt="hero"/>
			</figure>
			<div className={classes['hero-content']}>
				<span>Best Deal Online on smart watches</span>
				<h2>SMART WEARABLE.</h2>
				<span>UP to 80% OFF</span>
			</div>
		</section>
	</>
};

export default Hero;