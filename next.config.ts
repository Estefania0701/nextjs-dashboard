import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental', // Permite adoptar PPR para rutas específicas
  },
};

export default nextConfig;
