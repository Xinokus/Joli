import classes from './sectOne.module.scss'

import Image1 from './img/1.png'
import Image2 from './img/2.png'
import Image3 from './img/3.png'

export default function SectOne(){
    return(
        <>
            <section className={classes.sect_one}>
                <div className={classes.con}>
                    <div className={classes.left}>
                        <div className={classes.title}>
                            <h1>Making Tables Heroes</h1>
                        </div>
                        <div className={classes.desc}>
                            <p>Chairs, cabinets, but especially tables by Joli are durable products, designed to last and to be used intensively.</p>
                        </div>
                        <div className={classes.buttons}>
                            <button type="button">About us</button>
                            <button type="button">Collections</button>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div>
                            <img src={Image1} alt="" />
                        </div>
                        <div>
                            <img src={Image2} alt="" />
                            <img src={Image3} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}