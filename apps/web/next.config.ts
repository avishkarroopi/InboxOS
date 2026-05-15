import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@inbox-os/core", "@inbox-os/ui"],
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
