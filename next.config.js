/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.onlypaks.com'
            },
            {
                protocol: 'https',
                hostname: 'visual.onlypaks.com'
            },
        ],
    }
}

module.exports = nextConfig
