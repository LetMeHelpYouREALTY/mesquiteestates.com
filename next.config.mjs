/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  // Old template listings pages (demo data) now point to live Mesquite listings
  async redirects() {
    return [
      { source: '/Property', destination: '/Mesquite_Homes_For_Sale', permanent: true },
      { source: '/Property/:path*', destination: '/Mesquite_Homes_For_Sale', permanent: true },
    ];
  },
};

export default nextConfig;
