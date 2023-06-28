import classes from '../modules/Header.module.scss'
import layout from '../modules/Layout.module.scss'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.jpg'
import delivery from '../assets/delivery.svg'
import discount from '../assets/discount.svg'
import location from '../assets/location.svg'

const Header = () => {

	return <>
		<section className={`${classes['above-header']}`}>

			<div className={`${classes['container']} ${layout['container']}`}>
				<div className={classes['welcome-wrapper']}>
					<span>Welcome to worldwide Megamart!</span>
				</div>

				<div className={classes['links-bar']} >
					<ul>
						<li>
							<img src={delivery} alt=""/>
							<span>Deliver to 423651</span>
						</li>
						<li>
							<img src={location} alt=""/>
							<span>Track your order</span>
						</li>
						<li>
							<img src={discount} alt=""/>
							<span>All Offers</span>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section className={classes['header']}>
			<div className={`${classes['container']} ${layout['container']}`}>
				<div className={classes['logo']}>
					<figure>
						<img src={logo} alt="logo"/>
						<h1>the jarba emporiom</h1>
					</figure>
				</div>
				<div className={classes['cart-wrapper']}>
					<figure>
						<img src={cart} alt="cart"/>
						<h2>Cart</h2>
					</figure>
				</div>
			</div>

		</section>
	</>
};

export default Header;