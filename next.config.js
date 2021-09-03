const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const urlPrefix = process.env.NODE_ENV === 'production' ? '/conf2021' : ''

const nextConfig = {
  target: 'server',
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  pwa: {
    dest: 'public',
    subdomainPrefix: urlPrefix,
    runtimeCaching,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/', query: { locale: 'en' } },
      '/ja': { page: '/', query: { locale: 'ja' } },
      '/code-for-conduct': { page: '/code-for-conduct', query: { locale: 'en' } },
      '/ja/code-for-conduct': { page: '/code-for-conduct', query: { locale: 'ja' } },
      '/contact': { page: '/contact', query: { locale: 'en' } },
      '/ja/contact': { page: '/contact', query: { locale: 'ja' } },
      '/privacy-policy': { page: '/privacy-policy', query: { locale: 'en' } },
      '/ja/privacy-policy': { page: '/privacy-policy', query: { locale: 'ja' } },
    }
  },
}

module.exports = withPWA(nextConfig)
