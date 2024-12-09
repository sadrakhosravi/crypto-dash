import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'https://atsym9enh8.execute-api.us-west-1.amazonaws.com/Prod/:path*',
      },
    ];
  },

  crossOrigin: 'anonymous',
};

export default nextConfig;
