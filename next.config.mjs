/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/funding", destination: "/impact", permanent: true },
      { source: "/donate", destination: "/support", permanent: true },
    ];
  },
};

export default nextConfig;
