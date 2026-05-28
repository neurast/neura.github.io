/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'export',
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig;
