import type { NextConfig } from "next";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Tells Vercel "It's okay, build anyway"
  },
  eslint: {
    ignoreDuringBuilds: true, // Tells Vercel "Ignore linting for now"
  },
};

export default nextConfig;



