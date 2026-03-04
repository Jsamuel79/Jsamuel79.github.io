/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // sa remplace le dossier dist
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
