/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/list',
                destination: '/api/list',
            },
            {
                source: '/:fontName/:text',
                destination: '/api/:fontName/:text',
            },
        ]
    },
}
