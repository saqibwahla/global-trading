/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    
    // Next.js 16 handles Turbopack rules at the top level
    turbopack: {
      // Keep this block clear to let standard styling pass through cleanly
    },
  };
  
  module.exports = nextConfig;
  