/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["."],
  },
};

if (process.env.SERVER_ENV === "gh_pages") {
  nextConfig.basePath = process.env.BASE_PATH;
}

module.exports = nextConfig;
