/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a-us.storyblok.com", "interfacejournal.com"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/_next/static/forms/:path*",
      },
    ];
  },
};

module.exports = nextConfig;