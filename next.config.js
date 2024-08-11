/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: 'snaptogether',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
