/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["."],
  },
};

if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = process.env.BASE_PATH;
}

module.exports = nextConfig;
