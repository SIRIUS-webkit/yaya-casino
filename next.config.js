/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API: process.env.API,
  },
  images: {
    domains: [
      "cloudinary.kansino.nl",
      "cdn-kansino-staging-cdn-bucket.s3.eu-central-1.amazonaws.com",
      "shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
