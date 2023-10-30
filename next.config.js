/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'api.petproekt.ru',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'www.digiseller.ru',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig