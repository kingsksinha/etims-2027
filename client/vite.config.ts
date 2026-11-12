import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Listen on all local IPs (IPv4 & IPv6 loopback + LAN)
    port: 5173,
    strictPort: true,
    allowedHosts: true, // Allow external preview tunnels (lhr.life, loca.lt, etc.)
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
