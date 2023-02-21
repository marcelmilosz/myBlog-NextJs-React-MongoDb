import Image from "next/image";

import classes from './post-header.module.scss'

function PostHeader(props) {

    const { image } = props;
    const { title, date, author, readTime } = props.post;

    const avatarImagePath = "/images/Avatar.png"

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (
        <header className={classes.PostHeader}>
            <Image src={image} alt={title} width={2000} height={1000} />
            <div className={classes.PostDescriptionContainer}>
                <p> {formattedDate} </p>
                <h1> {title} </h1>
                <div className={classes.PostAuthorContainer}>
                    <Image src={avatarImagePath} alt={title} width={50} height={50} />
                    <h2> {author} </h2>
                </div>

                <p> Read time: {readTime} </p>
            </div>

        </header>
    )
}

export default PostHeader;