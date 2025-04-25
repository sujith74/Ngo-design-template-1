import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ['crowdera-platform.s3.ap-south-1.amazonaws.com', "cdn.pixabay.com"],
  }
};

export default nextConfig;
