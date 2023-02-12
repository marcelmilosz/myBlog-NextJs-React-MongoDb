import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import classes from './post-item.module.scss'

function PostItem(props) {

    const { title, image, excerpt, date, slug } = props.post;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={classes.PostItem}>
            <Link href={linkPath}>
                <div> <Image className={classes.PostImage} src={imagePath} alt={title} width={300} height={200} /> </div>
                <div>
                    <h3> Title </h3>
                    <time> {formattedDate} </time>
                    <p> {excerpt} </p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem