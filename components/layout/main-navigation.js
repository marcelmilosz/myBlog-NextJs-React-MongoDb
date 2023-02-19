import Link from "next/link";
import Logo from "./logo";
import LogoImage from "../../public/images/logo.png"

import classes from './main-navigation.module.scss'
import Image from "next/image";
import { useState } from "react";

function MainNavigation() {

    const [menuToggle, setMenuToggle] = useState(false)

    return (

        <nav className={"navbar is-fixed-top " + classes.navbar} role="navigation" aria-label="main navigation">
            <div class="container is-max-widescreen">
                <div className="navbar-brand">

                    <Link className="navbar-item" href="/">
                        <Image className={classes.Logo} alt="Logo" src={LogoImage} width={512} height={512} />
                    </Link>
                    <a className="navbar-item">Marcel Miłosz Blog</a>

                    <a role="button" onClick={() => { setMenuToggle(!menuToggle) }} className={`navbar-burger ${(menuToggle) && 'is-active'}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${classes.navbarMenu} ${(menuToggle) && 'is-active'}`}>


                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className="navbar-item">Home</a>
                            <a className="navbar-item">All Posts</a>
                            <a className="navbar-item">About me</a>
                            <a className="navbar-item">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    )
}

{/* // <header className={classes.Header}>
        //     <div className={classes.LogoContainer}>
        //         <Image src={LogoImage} alt={"Logo - home page"} width={512} height={512} />
        //         <a className={classes.Link} href="/"> <Logo /> </a>
        //     </div>

        //     <nav>
        //         <ul>
        //             <li> <a className={classes.Link} href="/"> Home </a> </li>
        //             <li> <a className={classes.Link} href="/posts"> Posts </a> </li>
        //             <li> <a className={classes.Link} href="/about"> About me </a> </li>
        //             <li> <a className={classes.Link} href="/contact"> Contact </a> </li>
        //         </ul>
        //     </nav>
        // </header> */}

export default MainNavigation;