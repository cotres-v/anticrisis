/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  typescript: {
    // ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;