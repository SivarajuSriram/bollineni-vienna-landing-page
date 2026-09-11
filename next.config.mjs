/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
    // Source photos in public/images are full-resolution (8000x4500, 5-12MB)
    // camera/render exports. next/image resizes + re-encodes them to AVIF/WebP
    // per requesting device on first request, then caches the result for a
    // year — deviceSizes/imageSizes are tuned to the actual widths this site
    // requests via each component's `sizes` prop, so nothing bigger than the
    // real display size is ever generated.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
