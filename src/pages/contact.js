import ContactForm from "components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";
import classes from '../styles/contact.module.scss'

function ContactPage() {
    return (
        <Fragment>
            <Head>
                <title> Contact Me </title>
                <meta name="description" content='Send me a message!' />
            </Head>
            <div className={classes.ContactPage}>
                <div className="container is-max-widescreen">
                    <div className='container is-fluid'>
                        <div className={classes.ContactPageContainer}>
                            <h1> Contact me </h1>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>

    )
}

export default ContactPage;