const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: './',
  i18n,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
