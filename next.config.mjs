/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pub-96456b28eb81442f9bbd3d212e9b7115.r2.dev', pathname: '/raw/**' },
      { protocol: 'https', hostname: 'images.mesquiteestates.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  async redirects() {
    return [
      // Template pages with demo listings / placeholder charts -> real, sourced pages
      { source: '/Property', destination: '/mesquite-estates/homes-for-sale', permanent: true },
      { source: '/Property/:path*', destination: '/mesquite-estates/homes-for-sale', permanent: true },
      { source: '/Dashboard', destination: '/mesquite-estates/market-report', permanent: true },
      { source: '/Dashboard/:path*', destination: '/mesquite-estates/market-report', permanent: true },
      { source: '/Login', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
