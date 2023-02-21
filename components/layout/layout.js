import { Fragment } from "react";
import MainNavigation from "./main-navigation";
import classes from './layout.module.scss'

function Layout(props) {

    return (
        <Fragment>
            <MainNavigation />

            <main className={classes.Page}>
                {props.children}

                <div className={classes.footer}>
                    <p> &copy; Marcel Miłosz Blog 2023+. All rigths reserved.</p>
                </div>
            </main>


        </Fragment>
    )

}

export default Layout;