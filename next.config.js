/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['firebasestorage.googleapis.com', 'elestoque.org'],
    },
};

module.exports = nextConfig;
