import Image from 'next/image';
import classes from './hero.module.scss';
import globals from '../../src/styles/globals.module.scss'
import downArrowIcon from '../../public/images/down.png'

function Hero(props) {

    const { posts } = props;
    const imagePath = `/images/posts/${posts[0].slug}/${posts[0].image}`

    const date = posts[0].date
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (
        <section className={classes.Hero}>

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
                            <Image src={imagePath} alt='Latest post' width={400} height={300} />
                            <div className={classes.HeroDescriptionContainer}>
                                <div className={classes.HeroNewestContainer}>
                                    <p> Latest </p>
                                    <h2> {posts[0].title}</h2>
                                </div>
                                <time> {formattedDate} </time>
                                <p style={{ marginTop: "1.5rem" }}> {posts[0].excerpt} </p>
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