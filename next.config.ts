import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['rippling2.imgix.net', 'diamondrock2.imgix.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'diamondrock2.imgix.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
