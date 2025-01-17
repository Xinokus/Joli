import classes from './sectSeven.module.scss'

export default function SectSeven(){
    return(
        <>
            <section className={classes.sect_seven}>
                <form className={classes.con}>
                    <div>
                        <h1>Request our <br /> 2022 catalogue.</h1>
                    </div>
                    <div className={classes.email}>
                        <label htmlFor="email">
                            <p>Email address*</p>
                            <input type="email" name="email" id="" />
                        </label>
                        <button type="button">I agree with the Privacy & Cookie Policy of Joli</button>
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </section>
        </>
    )
}