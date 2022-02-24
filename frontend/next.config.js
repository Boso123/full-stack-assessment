/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com']
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
    localeDetection: false
  }
}

module.exports = nextConfig
