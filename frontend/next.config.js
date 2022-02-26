/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com']
  },
  env: {
    QUESTIONS_API: process.env.QUESTIONS_API,
    TOKEN_STRAPI: process.env.TOKEN_STRAPI,
    STRAPI_AUTH: process.env.STRAPI_AUTH,
    USER: process.env.STRAPI_USER,
    PASSWORD: process.env.PASSWORD
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
    localeDetection: false
  }
}

module.exports = nextConfig
