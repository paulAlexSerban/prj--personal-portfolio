/** @type {import('next').NextConfig} */
const BASE_PATH = process.env.BASE_PATH;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["."],
  },
     // Add basePath
     basePath: BASE_PATH,
}

module.exports = nextConfig
