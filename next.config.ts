import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rippling2.imgix.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
