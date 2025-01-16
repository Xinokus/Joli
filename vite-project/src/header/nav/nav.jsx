import classes from './nav.module.scss'

export default function Nav(){
    return(
        <>
            <nav>
                <div className={classes.nav_con}>
                    <a href="">Collections</a>
                    <a href="">Products</a>
                    <a href="">Inspiration</a>
                    <a href="">About us</a>
                    <a href="">Find a dealer</a>
                </div>
            </nav>
        </>
    )
}