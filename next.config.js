/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    mongodb_username: 'marcelblog',
    mongodb_password: 'ubRhMOoAyJIG4jQu',
    mongodb_cluster: 'myBlog',
    mongodb_database: 'my-site',
  }
}

module.exports = nextConfig
