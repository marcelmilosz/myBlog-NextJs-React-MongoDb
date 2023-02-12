import Link from "next/link";
import Logo from "./logo";

import classes from './main-navigation.module.scss'

function MainNavigation() {


    return (
        <header className={classes.Header}>
            <div className={classes.LogoContainer}>
                <Link className={classes.Link} href="/"> <Logo />  </Link>
            </div>

            <nav>
                <ul>
                    <li> <Link className={classes.Link} href="/posts"> Posts </Link> </li>
                    <li> <Link className={classes.Link} href="/contact"> Contact </Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;