import classes from '../styles/about.module.scss'
import myAvatar from '../../public/images/Avatar.png';
import Image from 'next/image';
import Link from 'next/link';

function AboutPage() {


    return (
        <div className={classes.AboutPage}>
            <div className="container is-max-widescreen">
                <div className='container is-fluid'>
                    <div className={classes.AboutPageContainer}>
                        <h1> About </h1>


                        <div className={classes.AboutMeContainer}>
                            <Image src={myAvatar} alt="Marcel Milosz" width={100} height={100} />
                            <p> Welcome to my blog about mastering full stack web development! My name is Marcel and I&apos;m a passionate web developer with years of experience working with various technologies and frameworks. I created this blog to share my knowledge and experience with those who want to become proficient in full stack web development.</p>
                        </div>

                        <div className={classes.AboutBlogContainer}>
                            <p>
                                <br />
                                In this blog, I cover a wide range of topics, including <b>front-end development, back-end development, databases, server management, and more</b>. Whether you&apos;re just starting out or you&apos;re an experienced developer looking to expand your skill set, you&apos;ll find valuable information and insights that will help you advance your career.
                                <br /><br />

                                As someone who is passionate about web development, I understand the challenges and frustrations that come with the learning process. That&apos;s why <b>I strive to create content that is easy to follow and understand, without sacrificing depth or quality</b>. I want to help you overcome any obstacles you may encounter along the way and reach your full potential as a web developer.
                                <br /> <br />

                                If you ever get lost or have any questions about the content on this blog, please don&apos;t hesitate to contact me. You can reach me through the <Link href='/contact'>contact form on my website</Link>. I&apos;m always happy to hear from my readers and I will do my best to respond to your message as soon as possible.

                            </p>
                        </div>

                        <div className={classes.findMeContainer}>
                            <h3> You can also find me here </h3>
                            <div>
                                <Link href='https://github.com/marcelmilosz' target='_blank'> GitHub </Link>
                                <Link href='https://leetcode.com/Marcluu/' target='_blank'> LeetCode </Link>
                                <Link href='https://www.linkedin.com/in/marcel-mi%C5%82osz-82aab8239/' target='_blank'> LinkedIn </Link>
                            </div>


                        </div>

                        <p className={classes.thanksText}> <br /> Thank you for visiting my blog, and I hope you find the information here helpful and informative. </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutPage;