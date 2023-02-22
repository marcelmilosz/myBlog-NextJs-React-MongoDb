import PostItem from "./post-item";
import classes from "./posts-grid.module.scss"

function PostsGrid(props) {

    const { posts } = props;

    return (
        <ul className={classes.grid}>
            {posts.map((post, idx) => {

                // We dont wont to show last added post in all posts, it has to be on header section
                if (idx !== 0) {
                    return (
                        <PostItem id={`li${idx}`} key={post.slug + "-" + idx} post={post} />
                    )
                }

            })}
        </ul>
    )
}

export default PostsGrid