/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    mongodb_username: 'marcelBlog',
    mongodb_password: 'YOUR_PASSWORD',
    mongodb_cluster: 'cluster0',
    mongodb_database: 'my-site',
  }
}

module.exports = nextConfig
