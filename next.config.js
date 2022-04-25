/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['fakestoreapi.com'],
    path: '/_next/image',
    loader: 'default',
    // disableStaticImages: false,
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
