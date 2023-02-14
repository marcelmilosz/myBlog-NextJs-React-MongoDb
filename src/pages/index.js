import FeaturedPosts from "components/home-page/featured-posts";
import Hero from "components/home-page/hero";
import { getFeaturedPosts } from "lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";


const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-next-js1',
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-next-js1',
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: '2022-02-10'
  }
]


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
