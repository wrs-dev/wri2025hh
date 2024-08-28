/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a-us.storyblok.com", "interfacejournal.com"], 
  },
};

module.exports = async () => {
  const { withNetlify } = await import('@netlify/plugin-nextjs/dist/index.js');
  return withNetlify(nextConfig);
};