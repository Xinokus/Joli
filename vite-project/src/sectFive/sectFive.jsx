import classes from './sectFive.module.scss'

export default function SectFive(){
    return(
        <>
            <section className={classes.sect_five}>
                <div className={classes.con}>
                    <div>
                        <h1>Joli manages to offer designs that are both timelessly modern and trendy</h1>
                    </div>
                    <div>
                        <button type="button">About us</button>
                    </div>
                </div>
            </section>
        </>
    )
}