import PostsGrid from 'components/posts/posts-grid';
import classes from './featured-posts.module.scss';

function FeaturedPosts(props) {

    return (
        <section className={classes.FeaturedPosts}>
            <div className="container is-max-widescreen">
                <div className='container is-fluid'>
                    <div className={classes.FeaturedPostsContainer}>
                        {/* <h2> Featured Posts </h2> */}
                        <PostsGrid posts={props.posts} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FeaturedPosts;