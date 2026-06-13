// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/overview",
        destination: "/freshie/overview",
        permanent: true,
      },
      {
        source: "/academics",
        destination: "/freshie/academics",
        permanent: true,
      },
      {
        source: "/orgs",
        destination: "/freshie/orgs",
        permanent: true,
      },
      {
        source: "/housing",
        destination: "/freshie/housing",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/freshie/faq",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
