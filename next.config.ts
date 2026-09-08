import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The deploy target is Cloud Run, not a platform with its own Next adapter.
  output: "standalone",

  // Next stamps prerendered pages with s-maxage=31536000 and nothing purges Firebase's CDN
  // on redeploy, so a change could stay hidden behind a year-old cache. Hashed assets under
  // /_next/ keep their immutable headers.
  async headers() {
    return [
      {
        source: "/:path((?!_next/).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=300, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
