const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig = {
    target: 'server',
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
    pwa: {
        dest: 'public',
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
