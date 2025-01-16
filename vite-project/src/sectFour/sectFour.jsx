import classes from './sectFour.module.scss'

import Image1 from './img/1.png'
import Image2 from './img/2.png'
import Image3 from './img/3.png'

export default function SectFour(){
    return(
        <>
            <section className={classes.sect_four}>
                <div className={classes.con}>
                    <div className={classes.texts}>
                        <h1>Terrace</h1>
                        <h1>Ceremonies</h1>
                        <h1>Meetings</h1>
                    </div>
                    <div className={classes.button}>
                        <button type="button">Inspire me</button>
                    </div>
                </div>
                <div className={classes.absolute}>
                    <img src={Image1} alt="" />
                </div>
                <div className={classes.absolute}>
                    <img src={Image2} alt="" />
                </div>
                <div className={classes.absolute}>
                    <img src={Image3} alt="" />
                </div>
            </section>

        </>
    )
}