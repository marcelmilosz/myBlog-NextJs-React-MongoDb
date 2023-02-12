import AllPosts from "components/posts/all-posts";

function AllPostsPage() {

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

    return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage;