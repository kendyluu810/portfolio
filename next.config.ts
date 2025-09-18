import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    return config; // ép dùng Webpack
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
