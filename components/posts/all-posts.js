import classes from './all-posts.module.scss';
import PostItem from './post-item';

function AllPosts(props) {

    const { posts } = props

    return (
        <section className={classes.AllPosts}>
            <div className="container is-max-widescreen">
                <div className='container is-fluid'>
                    <div className={classes.AllPostsContainer}>
                        <h1>
                            All Posts
                        </h1>

                        <ul className={classes.grid}>
                            {posts.map((post, idx) => <PostItem key={post.slug + "-" + idx} post={post} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllPosts;