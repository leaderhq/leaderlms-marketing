import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@leader/marketing-ui", "@leader/types", "@leader/ui"],
  async redirects() {
    const marketingHosts = [
      { type: "host" as const, value: "leaderlms.io" },
      { type: "host" as const, value: "www.leaderlms.io" },
    ];
    return [
      ...marketingHosts.flatMap((has) => [
        {
          source: "/:path(login|signup|reset|forgot-password|dashboard)",
          has: [has],
          destination: "https://lms.leaderhq.io/:path",
          permanent: true,
        },
        {
          source: "/dashboard/:path*",
          has: [has],
          destination: "https://lms.leaderhq.io/dashboard/:path*",
          permanent: true,
        },
      ]),
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
