const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-1546500840-ae38253aba9b",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-1613109526778-27605f1f27d2",
      },
      {
        protocol: "https",
        hostname: "www.discover-the-world.com",
        pathname: "/app/uploads/**",
      },
    ],
  },
};

module.exports = withNextVideo(nextConfig);
