---
title: 'Getting started with NextJs'
date: '2023-01-22'
image: 'getting-started-nextjs.jpg'
excerpt: "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR"
isFeatured: true
tags: 'JavaScript, NextJs'
author: 'Marcel Miłosz'
readTime: '10 min.'
postId: 1
---

Next.js is a popular React framework that simplifies the process of building **server-side rendered (SSR)** web applications. It provides several features out of the box that can help you build scalable, high-performance web applications with ease. In this article, we will focus on the Next.js page rendering feature, specifically getStaticProps and getStaticPaths.

## What is Next.js?
Next.js is a framework for building React applications that enables server-side rendering by default. It also provides a range of other features, such as file-based routing, automatic code splitting, and optimized performance, making it an excellent choice for building modern web applications.

## Page Rendering in Next.js
Next.js has three types of page rendering methods: **server-side rendering, static site generation**, and **client-side rendering**. Each method has its use case, and you can choose the appropriate one based on your application's requirements.

**Server-side rendering** is the most common method used in Next.js, and it enables your pages to be pre-rendered on the server before being sent to the client. This method provides several benefits, such as better SEO, faster load times, and improved performance.

**Static site generation** is another method in Next.js that generates static HTML files at build time. These HTML files can be served directly to the client, improving performance and reducing the need for server resources.

**Client-side rendering**, on the other hand, is useful for dynamic content that needs to be generated on the fly. This method can be slower than server-side rendering or static site generation, but it provides more flexibility in terms of rendering dynamic content.

## getStaticProps
getStaticProps is a Next.js function that allows you to fetch data at build time and pre-render your pages statically. This function runs only on the server-side during the build process, and the resulting HTML is then cached and served to clients, making it a fast and efficient way to pre-render your pages.

Here is an example of how to use getStaticProps:

```js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
```

In this example, we are fetching data from an API and returning it as a prop to our component. The data is then statically generated during the build process and served to clients as HTML.

It's important to note that getStaticProps can only be used in pages, not in components. This is because it's a server-side function that runs during the build process.

## getStaticPaths
**getStaticPaths** is another Next.js function that is used in conjunction with getStaticProps. This function allows you to generate static paths for dynamic routes. For example, if you have a blog with dynamic routes for each post, you can use getStaticPaths to generate static paths for each post, which can then be statically rendered using getStaticProps.

## Here is an example of how to use getStaticPaths:

```javascript
export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
}
```

In this example, we are fetching a list of posts from an API and generating static paths for each post. The resulting paths are then used to statically generate the pages using getStaticProps.

The fallback option in getStaticPaths determines what to do if a path doesn't exist at build time. If fallback is set to true, then Next.js will generate the page on the fly at runtime. If fallback is set to false, then Next.js will return a 404 error for any paths that are not pre-defined at build time.

## Example Project
Let's put getStaticProps and getStaticPaths into practice by building a simple blog using Next.js. First, we'll create a new Next.js project by running the following command in your terminal:

```bash
npx create-next-app my-blog
```

This will create a new Next.js project called "my-blog". Next, we'll create a new file in the pages directory called index.js. This file will contain our blog home page, which will display a list of blog posts.

```javascript
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
```

In this file, we've created a simple home page that displays a list of blog posts. The getStaticProps function is used to fetch data from the JSONPlaceholder API and pass it as a prop to the Home component. We're using the Link component from Next.js to create links to each post's page.

Next, we'll create a new file in the pages directory called [id].js. This file will be used to display individual blog posts.

```javascript
import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
```

In this file, we've created a new Post component that displays an individual blog post. We're using the useRouter hook from Next.js to get the current route's parameters and fetch the data for the current post using the getStaticProps function. We're also using the getStaticPaths function to generate static paths for each post.

The fallback option is set to true, which means that Next.js will generate the page on the fly at runtime if a path doesn't exist at build time. We've also added the revalidate option to getStaticProps, which tells Next.js to regenerate the page every 10 seconds to ensure that the content is up to date.

## Conclusion
Next.js is a powerful and flexible framework for building React applications. Its **pre-rendering** capabilities make it easy to build fast and SEO-friendly websites, and its built-in routing system makes it easy to navigate between pages.

In this article, we've focused on getStaticProps and getStaticPaths, two of Next.js's most powerful pre-rendering features. With these functions, you can pre-render pages at build time and generate dynamic pages on the fly at runtime. This makes it easy to build fast and SEO-friendly websites that are easy to maintain.

Next.js also provides other pre-rendering features, such as getServerSideProps and getInitialProps, which can be used in certain situations where pre-rendering at build time isn't possible or desirable. With these features, you can easily build dynamic websites that are both fast and flexible.




