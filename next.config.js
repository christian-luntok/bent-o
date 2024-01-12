/** @type {import('next').NextConfig} */
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    }
};

module.exports = nextConfig;
