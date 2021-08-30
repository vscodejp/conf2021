const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const urlPrefix = process.env.NODE_ENV === 'production' ? '/conf2021' : ''

const nextConfig = {
    target: 'serverless',
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
    pwa: {
        dest: 'public',
        subdomainPrefix: urlPrefix,
        runtimeCaching,
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/code-for-conduct': { page: '/code-for-conduct' },
            '/contact': { page: '/contact' },
            '/privacy-policy': { page: '/privacy-policy' },
        }
    },
}

module.exports = withPWA(nextConfig)
