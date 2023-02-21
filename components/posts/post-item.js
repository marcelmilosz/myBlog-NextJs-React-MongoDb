import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import classes from './post-item.module.scss'
import globals from '../../src/styles/globals.module.scss'

function PostItem(props) {

    const { title, image, excerpt, date, slug, tags } = props.post;

    const splittedTags = tags.split(',')

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
                <Image className={classes.PostImage} src={imagePath} alt={title} width={400} height={300} />
                <div className={classes.PostContainer}>
                    <div className={classes.PostTagsContainer} >
                        {splittedTags.map((ele, idx) => {
                            return (
                                <p key={idx}> {ele} </p>
                            )
                        })}
                    </div>
                    <h3> {title} </h3>
                    <time> {formattedDate} </time>
                    <p> {excerpt} </p>
                    <button className={globals.myReadMore}> Read more &gt; </button>
                </div>
            </Link>
        </li>
    )
}

export default PostItem