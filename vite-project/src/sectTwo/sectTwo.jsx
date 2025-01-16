import classes from './sectTwo.module.scss'

import Arrow from './img/arrow.png'
import Slide from './singleSlide/slide'

import SlideImage1 from './img/slide1.png'
import SlideImage2 from './img/slide2.png'

export default function SectTwo(){
    return(
        <>
            <section className={classes.sect_two}>
                <div className={classes.con}>
                    <div className={classes.title}>
                        <div>
                            <h1>Our collections</h1>
                        </div>
                        <div>
                            <button type="button">Central</button>
                            <button type="button">Olivo</button>
                            <button type="button">Morisot</button>
                            <button type="button">Curve</button>
                            <button type="button">Wire</button>
                            <button type="button">Marguerite</button>
                            <button type="button">Fizz</button>
                            <button type="button">Rafael</button>
                            <button type="button">Chagall</button>
                        </div>
                    </div>
                    <div className={classes.slider}>
                        <Slide img={SlideImage1} text={'Ready to become the centerpiece of your home'}/>
                        <Slide img={SlideImage2} text={'Believe us, this will be a real eye-catcher'}/>
                    </div>
                </div>
                <div className={classes.navigation}>
                    <img src={Arrow} alt="" />
                    <p>1 / 9</p>
                    <img src={Arrow} alt="" />
                </div>
            </section>
        </>
    )
}