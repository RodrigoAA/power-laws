import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Generación estática completa
  images: {
    unoptimized: true, // Requerido para export estático
  },
  trailingSlash: true, // Mejor para hosting estático
}

export default nextConfig
