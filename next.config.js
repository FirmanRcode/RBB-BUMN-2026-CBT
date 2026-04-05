/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // don't cache in dev
  register: true,
  skipWaiting: true
});

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPWA(nextConfig);
