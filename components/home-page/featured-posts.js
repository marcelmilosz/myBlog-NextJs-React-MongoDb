import PostsGrid from 'components/posts/posts-grid';
import classes from './featured-posts.module.scss';

function FeaturedPosts(props) {

    return (
        <section className={classes.FeaturedPosts}>
            <h2> Featured Posts </h2>
            <PostsGrid posts={props.posts} />
        </section>
    )
}

export default FeaturedPosts;