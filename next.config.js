/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/blog-sample" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
