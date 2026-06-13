// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old legacy top-level shortcuts
      { source: "/overview", destination: "/freshie", permanent: true },
      { source: "/academics", destination: "/freshie", permanent: true },
      { source: "/orgs", destination: "/freshie", permanent: true },
      { source: "/housing", destination: "/freshie", permanent: true },
      { source: "/faq", destination: "/freshie", permanent: true },
      
      // Old tabbed paths
      { source: "/freshie/overview", destination: "/freshie", permanent: true },
      { source: "/freshie/academics", destination: "/freshie", permanent: true },
      { source: "/freshie/orgs", destination: "/freshie", permanent: true },
      { source: "/freshie/housing", destination: "/freshie", permanent: true },
      { source: "/freshie/faq", destination: "/freshie", permanent: true },
    ];
  },
};

export default nextConfig;
