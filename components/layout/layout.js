import { Fragment, useEffect, useState } from "react";
import MainNavigation from "./main-navigation";
import classes from './layout.module.scss'
import Image from "next/image";
import arrowUpIcon from '../../public/images/up-arrow.png'

function Layout(props) {

    const [isVisible, setIsVisible] = useState(false);

    function smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    // All for showing scroll top icon after 200 points of scroll down :) 
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    function listenToScroll() {
        let hideFrom = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll < hideFrom) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };



    return (
        <Fragment>
            <MainNavigation />

            <main className={classes.Page}>
                {props.children}

                {/* {isVisible && */}
                <div className={`${classes.PostUpContainer} ${(isVisible) ? classes.showAnimation : classes.hideAnimation}`} onClick={smoothScrollToTop}>
                    <Image src={arrowUpIcon} alt={"Arrow up"} width={50} height={50} />
                </div>
                {/* } */}

                <div className={classes.footer}>
                    <p> &copy; Marcel Miłosz Blog 2023+. All rigths reserved.</p>
                </div>
            </main>


        </Fragment>
    )

}

export default Layout;