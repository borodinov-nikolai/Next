/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: '0.0.0.0',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'api.petproekt.ru',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'digiseller.com',
            pathname: '/**',
          }
        
        ],
      },
     
}

module.exports = nextConfig
