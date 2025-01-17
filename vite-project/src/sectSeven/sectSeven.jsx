import classes from './sectSeven.module.scss'

export default function SectSeven(){
    return(
        <>
            <section className={classes.sect_seven}>
                <div className={classes.con}>
                    <div>
                        <h1>Request our <br /> 2022 catalogue.</h1>
                    </div>
                    <div className={classes.email}>
                        <label htmlFor="">
                            <p>Email address*</p>
                            <input type="email" name="" id="" />
                        </label>
                        <button type="button">I agree with the Privacy & Cookie Policy of Joli</button>
                    </div>
                    <div>
                        <button type="button">Send</button>
                    </div>
                </div>
            </section>
        </>
    )
}