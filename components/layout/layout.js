import { Fragment } from "react";
import MainNavigation from "./main-navigation";
import classes from './layout.module.scss'

function Layout(props) {

    return (
        <Fragment>
            <MainNavigation />

            <main className={classes.Page}>
                {props.children}
            </main>
        </Fragment>
    )

}

export default Layout;