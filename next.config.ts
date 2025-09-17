import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove turbo config as it's causing font resolution issues
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shot.screenshotapi.net',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ],
  },
};

export default nextConfig;
