import PostHeader from "./post-header";

import classes from './post-content.module.scss'

import ReactMarkdown from 'react-markdown'
import Image from "next/image";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useEffect, useState } from "react";
import Link from "next/link";


function PostContent(props) {

    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    // For getRelatedPosts
    const [prevPost, setPrevPost] = useState(null);
    const [nextPost, setNextPost] = useState(null);

    useEffect(() => {
        setPrevPost(null);
        setNextPost(null);

        // We want to display other posts next to each other like
        // currentPost id = 2 so we display id = 1 as prev and id = 3 as next
        function getRelatedPosts() {
            const currentPostId = post.postId;
            const allPostsIds = props.allPosts.map((ele) => {
                return ele.postId
            })

            // it works only if we have more than 2 posts!
            if (allPostsIds.length > 2) {

                const currentPostIdInArr = allPostsIds.indexOf(currentPostId);

                if (currentPostIdInArr === 0) {
                    setNextPost(props.allPosts[1])
                } else if ((currentPostIdInArr > 0) && (currentPostIdInArr < allPostsIds.length - 1)) {

                    setNextPost(props.allPosts[currentPostIdInArr + 1])
                    setPrevPost(props.allPosts[currentPostIdInArr - 1])
                } else if (currentPostIdInArr === allPostsIds.length - 1) {

                    setPrevPost(props.allPosts[currentPostIdInArr - 1])
                }
            }
        }

    }, [post.postId, props.allPosts])




    const customRenderers = {
        paragraph(paragraph) {
            const { node } = paragraph;
            if (node.children[0].type === 'image') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image src={`/images/posts/${post.slug}/${image.url}`} alt={image.alt} width={600} height={300} />
                    </div>
                )
            } else {
                return <p> {paragraph.children} </p>
            }


        },
        code(code) {
            const { className, children } = code

            const match = /language-(\w+)/.exec(className || '')

            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                >{children}</SyntaxHighlighter>
            )
        }
    };

    return (

        <article className={classes.PostContent}>

            <PostHeader post={post} image={imagePath} />
            <div className={classes.PostContentContainer}>
                <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>

                {/* We want to display all other posts at the bottom for user to read.. */}
                {(prevPost && nextPost) &&
                    <div className={classes.otherPostsContainer}>

                        <Link href={`/posts/${prevPost.slug}`}>
                            <div className={classes.otherPostsBox}>
                                <div className={classes.otherPostImage}>
                                    <p className={classes.otherInfo}> Previous </p>
                                    <time> {prevPost.date} </time>
                                    <p className={classes.otherTitle}> {prevPost.title} </p>
                                    <div className={classes.tagsContainer}>
                                        {
                                            prevPost.tags.split(',').map((ele, idx) => {
                                                return (
                                                    <span key={`tag-${idx}`}> {ele} </span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className={classes.otherTime}> Read time: {prevPost.readTime} </p>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/posts/${nextPost.slug}`}>
                            <div className={classes.otherPostsBox}>
                                <div className={classes.otherPostImage}>
                                    <p className={classes.otherInfo}> Next </p>
                                    <time> {nextPost.date} </time>
                                    <p className={classes.otherTitle}> {nextPost.title} </p>
                                    <div className={classes.tagsContainer}>
                                        {
                                            nextPost.tags.split(',').map((ele, idx) => {
                                                return (
                                                    <span key={`tag-${idx}`}> {ele} </span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className={classes.otherTime}> Read time: {nextPost.readTime} </p>
                                </div>
                            </div>
                        </Link>

                    </div>
                }

                {(prevPost && !nextPost) &&
                    <div className={classes.otherPostsContainer}>

                        <Link href={`/posts/${prevPost.slug}`}>
                            <div className={classes.otherPostsBox} style={{ width: "50%", flex: "none" }}>
                                <div className={classes.otherPostImage}>
                                    <p className={classes.otherInfo}> Previous </p>
                                    <time> {prevPost.date} </time>
                                    <p className={classes.otherTitle}> {prevPost.title} </p>
                                    <div className={classes.tagsContainer}>
                                        {
                                            prevPost.tags.split(',').map((ele, idx) => {
                                                return (
                                                    <span key={`tag-${idx}`}> {ele} </span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className={classes.otherTime}> Read time: {prevPost.readTime} </p>
                                </div>
                            </div>
                        </Link>

                    </div>
                }

                {(!prevPost && nextPost) &&
                    <div className={classes.otherPostsContainer}>

                        <Link href={`/posts/${nextPost.slug}`}>
                            <div className={classes.otherPostsBox} style={{ width: "50%", flex: "none" }}>
                                <div className={classes.otherPostImage}>
                                    <p className={classes.otherInfo}> Next </p>
                                    <time> {nextPost.date} </time>
                                    <p className={classes.otherTitle}> {nextPost.title} </p>
                                    <div className={classes.tagsContainer}>
                                        {
                                            nextPost.tags.split(',').map((ele, idx) => {
                                                return (
                                                    <span key={`tag-${idx}`}> {ele} </span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className={classes.otherTime}> Read time: {nextPost.readTime} </p>
                                </div>
                            </div>
                        </Link>

                    </div>
                }
            </div>


        </article >
    )

}

export default PostContent;