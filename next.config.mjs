/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
  },
  experimental: {
    ppr: true,
  },
};

export default nextConfig;
