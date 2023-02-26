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
            <div className="container is-max-widescreen">
                <div className="navbar-brand">

                    <Link className="navbar-item" href="/">
                        <Image className={classes.Logo} alt="Logo" src={LogoImage} width={512} height={512} />
                        <p className={`${"navbar-item"} ${classes.navLinkLogo}`}> Marcel Miłosz Blog  </p>
                    </Link>

                    <a role="button" onClick={() => { setMenuToggle(!menuToggle) }} className={`navbar-burger ${(menuToggle) && 'is-active'}`} style={{ color: "#FFF" }} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${classes.navbarMenu} ${(menuToggle) && 'is-active'}`}>


                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link className={classes.navLink} href="/"><p className="navbar-item">Home</p></Link>
                            <Link className={classes.navLink} href="/posts"><p className="navbar-item">All Posts</p></Link>
                            <Link className={classes.navLink} href="/about"><p className="navbar-item">About</p></Link>
                            <Link className={classes.navLink} href="/contact"><p className="navbar-item">Contact</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    )
}


export default MainNavigation;