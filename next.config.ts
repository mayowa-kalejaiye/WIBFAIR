import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "bunmialabi.com" },
    ],
  },
  // Fix Jest worker EPIPE on Windows (webpack dev) - limit workers for large 4MB assets
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
