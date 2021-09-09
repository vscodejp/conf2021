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
}

module.exports = withPWA(nextConfig)
