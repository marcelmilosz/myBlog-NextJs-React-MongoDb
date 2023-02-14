import PostHeader from "./post-header";

import classes from './post-content.module.scss'
import ReactMarkdown from 'react-markdown'
import Image from "next/image";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'


function PostContent(props) {

    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        paragraph(paragraph) {
            const { node } = paragraph;
            if (node.children[0].type === 'image') {
                const image = node.children[0];

                return <div className={classes.image}>
                    <Image src={`/images/posts/${post.slug}/${image.url}`} alt={image.alt} width={600} height={300} />
                </div>
            }

            return <p> {paragraph.children} </p>
        },
        code(code) {
            const { className, children } = code

            const match = /language-(\w+)/.exec(className || '')

            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                >{children}</SyntaxHighlighter>)
        }



    };

    return (
        <article className={classes.PostContent}>
            <div className={classes.PostContentContainer}>
                <PostHeader title={post.title} image={imagePath} />
                <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
            </div>

        </article>
    )

}

export default PostContent;