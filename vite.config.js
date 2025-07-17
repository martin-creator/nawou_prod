import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import ziggy from 'laravel-vite-plugin/ziggy';
import {
    defineConfig
} from 'vite';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        ziggy(), // <- This is crucial
    ],
    esbuild: {
        jsx: 'automatic',
    },

    build: {
        rollupOptions: {
          external: ['ziggy-js'],
        },
      },
});