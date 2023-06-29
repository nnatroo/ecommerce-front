import classes from '../modules/Footer.module.scss'
import layout from '../modules/Layout.module.scss'
import down1 from '../assets/play-store.jpg'
import down2 from '../assets/app-store.jpg'
import {Fade} from "react-awesome-reveal";
const Footer = () => {

    return <>
        <Fade>
            <section className={`${classes['footer-wrapper']}`}>

                <div className={`${layout['container']} ${classes['container']}`}>
                    <div className={classes['footer-contact']}>
                        <h2>MegaMart</h2>
                        <span>Download App</span>
                        <figure>
                            <img src={down1} alt=""/>
                            <img src={down2} alt=""/>
                        </figure>

                    </div>

                    <div className={classes['footer-categories']}>
                        <span>Most Popular Categories</span>
                        <nav>
                            <ul>
                                <li>Staples</li>
                                <li>Beverages</li>
                                <li>Personal Care</li>
                                <li>Home Care</li>
                                <li>Baby Care</li>
                                <li>Vegetables & Fruits</li>
                                <li>Snacks & Foods</li>
                                <li>Dairy & Bakery</li>
                            </ul>
                        </nav>
                    </div>

                    <div className={classes['footer-categories']}>
                        <span>Customer Services</span>
                        <nav>
                            <ul>
                                <li>About Us</li>
                                <li>Terms & Conditions</li>
                                <li>FAQ</li>
                                <li>Privacy Policy</li>
                                <li>E-waste Policy</li>
                                <li>Cancellation & Return Policy</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`${layout['container']} ${classes['under-footer-bar']}`}>
                    <span>© 2023 All rights reserved. Natro & Jarbare.</span>
                </div>

            </section>
        </Fade>

    </>;
}

export default Footer;