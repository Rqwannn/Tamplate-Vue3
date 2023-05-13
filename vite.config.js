import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        'favicon.ico',
        'robots.txt',
        // 'apple-touch-icon.png',
        'src/assets/**/*' // Daftarkan semua file di dalam direktori `src/assets`
      ],
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        
        // Daftarkan `sw.js` dan file precache manifest di sini

        runtimeCaching: [
          {
            // urlPattern: /^http:\/\/your-domain\.com\/src\/assets\/.*/,
            urlPattern: /src\/assets\/.*\.css$/,
            // urlPattern: /^http:\/\/127\.0\.0\.1:5173\/assets\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'css-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          {
            urlPattern: /src\/assets\/.*\.js$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'js-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|js|vue)$/,
            handler: 'CacheFirst',
          },
        ],
        
        // Daftarkan `sw.js` dan file precache manifest di sini

        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        // additionalManifestEntries: [
        //   { url: 'http://127.0.0.1:5173/src/assets/style.css', revision: null }
        // ],
      },
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Vue 3 Composition API & PWA',
        short_name: 'Raqwan',
        theme_color: '#ffffff',
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        // include: [
        //   'http://127.0.0.1:5173/src/assets/style.css',
        // ],
        // exclude: [
        //   /\.map$/,
        //   /img\/icons\//,
        //   /favicon\.ico$/,
        // ],
        // icons: [
        //   {
        //     src: '/icons/icon-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png',
        //   },
        //   {
        //     src: '/icons/icon-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png',
        //   },
        // ],
      },
    }),
  ],
})
