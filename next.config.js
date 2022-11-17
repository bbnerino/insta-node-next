/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{domains: ['localhost','www.instagram.com',"*" ]}
}

module.exports = nextConfig
