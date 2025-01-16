import classes from '../sectTwo.module.scss'
import Arrow from '../img/arrow.png'

export default function Slide({img, text}){
    return(
        <>
            <div className={classes.slide}>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className={classes.bot}>
                    <p>{text}</p>
                    <img src={Arrow} alt="" />
                </div>
            </div>
        </>
    )
}