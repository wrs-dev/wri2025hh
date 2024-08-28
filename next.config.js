const { withNetlify } = require('@netlify/plugin-nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a-us.storyblok.com", "interfacejournal.com"], 
  },
};

module.exports = withNetlify(nextConfig);