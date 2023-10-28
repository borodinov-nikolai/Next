/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            pathname: '/**',
          },
        ],
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.petproekt.ru',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
