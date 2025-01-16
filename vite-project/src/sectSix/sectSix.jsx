import classes from './sectSix.module.scss'

import IMG from './img/img.png'

export default function SectSix(){
    return(
        <>
            <section className={classes.sect_six}>
                <div className={classes.left}>
                    <img src={IMG} alt="" />
                </div>
                <div className={classes.right}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <h1>Become a Dealer</h1>
                        </div>
                        <div className={classes.desc}>
                            <p>Do you want to become a Joli retailer? Please submit the following form and we will contact you!</p>
                        </div>
                        <div className={classes.button}>
                            <button type="button">Learn more</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}