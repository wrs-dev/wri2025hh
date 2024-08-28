/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a-us.storyblok.com", "interfacejournal.com"], 
  },
};

export default async function() {
  const { withNetlify } = await import('@netlify/plugin-nextjs/dist/index.js');
  return withNetlify(nextConfig);
}