/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/primebet-24.appspot.com/o/MotoMarket%2F*",
      },
    ],
  },
};

export default nextConfig;
