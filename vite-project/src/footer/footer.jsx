import classes from './footer.module.scss'

import Logo from './img/logo.png'
import Face from './img/face.png'
import Inst from './img/inst.png'
import Pin from './img/pin.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div className={classes.con}>
                    <div className={classes.left}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={classes.right}>
                        <div className={classes.top}>
                            <ul>
                                <p>Collections</p>
                                <a href="">
                                    <li>Wire</li>
                                </a>
                                <a href="">
                                    <li>Curve</li>
                                </a>
                                <a href="">
                                    <li>Fizz</li>
                                </a>
                                <a href="">
                                    <li>Marguerite</li>
                                </a>
                            </ul>
                            <ul>
                                <p>Products</p>
                                <a href="">
                                    <li>Tables</li>
                                </a>
                                <a href="">
                                    <li>Chairs</li>
                                </a>
                                <a href="">
                                    <li>Cabinets</li>
                                </a>
                                <a href="">
                                    <li>Accessories</li>
                                </a>
                            </ul>
                            <ul>
                                <p>Inspiration</p>
                                <a href="">
                                    <li>Joli Days 2022</li>
                                </a>
                                <a href="">
                                    <li>Terrace</li>
                                </a>
                                <a href="">
                                    <li>Ceremonies</li>
                                </a>
                                <a href="">
                                    <li>Meetings</li>
                                </a>
                            </ul>
                            <ul>
                                <p>About us</p>
                                <a href="">
                                    <li>Materials</li>
                                </a>
                                <a href="">
                                    <li>Find a dealer</li>
                                </a>
                                <a href="">
                                    <li>Professionals</li>
                                </a>
                                <a href="">
                                    <li>News</li>
                                </a>
                            </ul>
                            <ul>
                                <p>Contact</p>
                                <li>Industrielaan 5</li>
                                <li>8520 Kortrijk</li>
                                <li>info@joli.be</li>
                            </ul>
                        </div>
                        <div className={classes.bot}>
                            <div className={classes.text}>
                                <a href="">Privacy & Cookie Policy</a>
                                <a href="">Disclaimer</a>
                                <p>made by Xinokus</p>
                            </div>
                            <div className={classes.socials}>
                                <a href=""><img src={Face} alt="" /></a>
                                <a href=""><img src={Inst} alt="" /></a>
                                <a href=""><img src={Pin} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}