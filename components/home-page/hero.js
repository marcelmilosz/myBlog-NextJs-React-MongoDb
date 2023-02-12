import Image from 'next/image';
import classes from './hero.module.scss';

function Hero() {

    return (
        <section className={classes.Hero}>
            <div className={classes.HeroImageContainer}>
                <Image className={classes.HeroImage} width={687} height={688} src="/images/avatar.png" alt="Owner of blog - Marcel" />
            </div>
            <h1> Hi is me Mario!</h1>
            <p> NextJs Course! Hello my name is Eminem and I want to kill my self :D </p>

        </section>
    )
}

export default Hero;