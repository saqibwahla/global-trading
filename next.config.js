/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    
    // This explicitly bypasses Turbopack for production compilation
    // while satisfying the need for a stable Webpack build process
    experimental: {
      turbo: {
        // If you need specific rule configurations later, they go here
      }
    }
  };
  
  module.exports = nextConfig;
  