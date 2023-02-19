import FeaturedPosts from "components/home-page/featured-posts";
import Hero from "components/home-page/hero";
import { getFeaturedPosts } from "lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";


function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title> Marcels Blog</title>
        <meta name="description" content='A passionate programmer that talks about web dev' />
        {/* Favicon here  */}
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;
