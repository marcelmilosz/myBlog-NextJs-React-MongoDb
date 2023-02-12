import classes from './all-posts.module.scss';
import PostsGrid from './posts-grid';

function AllPosts(props) {

    return (
        <section className={classes.AllPosts}>
            <h1>
                All Posts
            </h1>
            <PostsGrid posts={props.posts} />
        </section>
    )
}

export default AllPosts;