import type { NextConfig } from "next";
import { basePath } from "./app/_lib/basePath";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
