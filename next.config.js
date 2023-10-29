/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true } //追記
}

module.exports = nextConfig
