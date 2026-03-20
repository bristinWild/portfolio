import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "plum-labour-meadowlark-47.mypinata.cloud" },
      { protocol: "https", hostname: "ipfs.io" },
      { protocol: "https", hostname: "cloudflare-ipfs.com" },
      { protocol: "https", hostname: "dweb.link" },
      { protocol: "https", hostname: "gateway.pinata.cloud" },
    ],
  },
};

export default nextConfig;
