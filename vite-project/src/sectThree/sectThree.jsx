import classes from './sectThree.module.scss'

import IMG from './img/img.png'

export default function SectThree(){
    return(
        <>
            <section className={classes.sect_three}>
                <div className={classes.left}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <h1>Find a Dealer</h1>
                        </div>
                        <div className={classes.desc}>
                            <p>We work together with dealers in 19 countries, all over the world. Find out which one is closest to you.</p>
                        </div>
                        <div className={classes.input}>
                            <input type="text" placeholder='Your Location'/>
                        </div>
                        <div className={classes.button}>
                            <button type="button">Search</button>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <img src={IMG} alt="" />
                </div>
            </section>
        </>
    )
}