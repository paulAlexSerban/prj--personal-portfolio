/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["."],
  },
};

if (process.env.NODE_ENV === "gh_pages") {
  nextConfig.basePath = "/prj--personal-portfolio";
  console.log(nextConfig)
}

module.exports = nextConfig;
