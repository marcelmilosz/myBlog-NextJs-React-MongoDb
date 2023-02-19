import Image from 'next/image';
import classes from './hero.module.scss';
import globals from '../../src/styles/globals.module.scss'
import downArrowIcon from '../../public/images/down.png'

function Hero() {

    return (
        <section className={classes.Hero}>
            {/* <h1> Breaking Down the Stack: Learn Full Stack Development with Easy-to-Understand Explanations </h1> */}

            <div className="container is-max-widescreen">
                <div className='container is-fluid'>
                    <div className={classes.HeroContainer}>
                        {/* Title */}
                        <div className={classes.HeroTitleContainer}>
                            <h1> <b> Breaking Down the Stack: </b> <br /><br />
                                Learn Full Stack Development with Easy-to-Understand Explanations
                            </h1>
                        </div>

                        {/* Latest Post here */}
                        <div className={classes.HeroLatestPostContainer}>
                            <Image src='/images/posts/getting-started-with-nextjs/getting-started-nextjs.png' alt='Latest post' width={350} height={175} />
                            <div className={classes.HeroDescriptionContainer}>
                                <h2> Latest Post </h2>
                                <p> NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR</p>
                                <button className={globals.myBtn}> Read more </button>
                            </div>
                        </div>



                    </div>

                    <div className={classes.HeroDownContainer}>
                        <p> Featured Posts <Image src={downArrowIcon} alt='featured posts arrow' width={25} height={25} /> </p>

                    </div>
                </div>
            </div>


        </section>
    )
}

export default Hero;