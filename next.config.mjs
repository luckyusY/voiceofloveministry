/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so Turbopack ignores any stray lockfiles
  // elsewhere on the machine (e.g. in the home directory).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
