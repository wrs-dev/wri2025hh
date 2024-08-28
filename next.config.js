/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a-us.storyblok.com", "interfacejournal.com"], 
  },
  // Add any other Next.js config options here
};

module.exports = nextConfig;