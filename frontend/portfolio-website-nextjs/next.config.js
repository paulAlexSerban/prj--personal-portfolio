/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["."],
  },
   // Add basePath
   basePath: '/prj--personal-portfolio',
}

module.exports = nextConfig
