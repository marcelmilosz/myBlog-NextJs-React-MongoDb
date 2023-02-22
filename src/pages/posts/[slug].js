import PostContent from "components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "lib/posts-util";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";

import classes from '../../../components/posts/slug.module.scss'

function PostDetailPage(props) {

    function ReadingIndicator() {
        const [indicator, setIndicator] = useState(0);

        const scroller = () => {
            let element = document.documentElement,
                top = element.scrollTop || document.body.scrollTop,
                height = element.scrollHeight || document.body.scrollHeight;
            let calculate = (top / (height - element.clientHeight)) * 100;
            setIndicator(parseInt(calculate));
        };

        useEffect(() => {
            window.addEventListener("scroll", scroller);
            return () => window.removeEventListener("scroll", scroller);
        }, [indicator]);

        return (
            <ProgressBar style={{ width: indicator + "%" }}></ProgressBar>
        );
    }

    function ProgressBar(props) {

        let width = props.style.width;

        return (
            <div className={classes.ReadProgressContainer}>
                <div className={classes.ProgressBar} style={{ width: width }}> </div>
            </div>
        )
    }


    return (
        <Fragment>
            <Head>
                <title> {props.post.title} </title>
                <meta name="description" content={props.post.excerpt} />
            </Head>

            <ReadingIndicator />

            <PostContent post={props.post} />
        </Fragment>
    )

}

export function getStaticProps(context) {

    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 1800
    }

}

export function getStaticPaths() {

    const postFilenames = getPostsFiles();
    const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}

export default PostDetailPage;