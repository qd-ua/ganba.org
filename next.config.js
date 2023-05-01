/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.ganba.org',
        pathname: '/storage/**',
      },
    ],
  },
}

module.exports = nextConfig
