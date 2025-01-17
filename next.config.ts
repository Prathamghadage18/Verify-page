/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for Netlify to handle images without its own optimization
  },
};

export default nextConfig;
