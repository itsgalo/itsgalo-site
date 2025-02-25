/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.io', 'artblocks-mainnet.s3.amazonaws.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
