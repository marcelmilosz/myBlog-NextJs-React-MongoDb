import PostHeader from "./post-header";

import classes from './post-content.module.scss'
import ReactMarkdown from 'react-markdown'


function PostContent() {

    const DUMMY_POST = {

        slug: 'getting-started-with-next-js1',
        title: "Getting started with NextJs",
        image: "getting-started-nextjs.png",
        content: '# Hello, *world*!',
        date: '2022-02-10'

    }


    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

    return (
        <article className={classes.PostContent}>
            <div className={classes.PostContentContainer}>
                <PostHeader title={DUMMY_POST.title} image={imagePath} />
                <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
            </div>

        </article>
    )

}

export default PostContent;