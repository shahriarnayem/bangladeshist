/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  allowedDevOrigins: ['192.168.0.249']
};
export default nextConfig;
