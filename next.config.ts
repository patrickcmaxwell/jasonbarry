import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/advisory-options", destination: "/work-with-me", permanent: true },
      { source: "/advisory", destination: "/work-with-me", permanent: true },
    ];
  },
};

export default nextConfig;
