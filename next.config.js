/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    mongodb_username: 'marcelBlog',
    mongodb_password: 'olEU1X3fku1YK4J8',
    mongodb_cluster: 'cluster0',
    mongodb_database: 'my-site',
  }
}

module.exports = nextConfig
