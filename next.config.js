/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["firebasestorage.googleapis.com"]
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
