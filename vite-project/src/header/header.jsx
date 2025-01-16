import classes from './header.module.scss'

import Nav from './nav/nav'

export default function Header(){
    return(
        <>
            <header>
                <Nav/>
                <div className={classes.header_main}>
                    <h1>lasting memories</h1>
                </div>
            </header>
        </>
    )
}