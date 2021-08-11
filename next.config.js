const nextConfig = {
    target: 'server',
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

module.exports = nextConfig
