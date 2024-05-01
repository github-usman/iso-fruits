/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pravatar.cc", "static.wixstatic.com", "www.registerkaro.in", "registerkaro.in", "secure.gravatar.com"],
  }
};

export default nextConfig;