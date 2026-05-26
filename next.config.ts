import type { NextConfig } from "next";

/** Set FORGE_LOW_MEMORY=1 on small VPS builds to avoid OOM (SIGKILL) */
const isLowMemoryBuild = process.env.FORGE_LOW_MEMORY === "1";

const nextConfig: NextConfig = {
  // Standalone tracing spikes RAM during build; skip on Forge small servers
  ...(isLowMemoryBuild ? {} : { output: "standalone" as const }),
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: isLowMemoryBuild,
  },
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    webpackMemoryOptimizations: true,
    // Limit parallel static generation workers (reduces peak RAM)
    ...(isLowMemoryBuild ? { cpus: 1 } : {}),
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "gsap",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-select",
    ],
  },
};

export default nextConfig;
