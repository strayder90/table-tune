import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite';
import {resolve} from 'path';

const root = resolve(__dirname, './src/');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            manifest: {
                name: 'Table Tune',
                short_name: 'TT',
                description: 'Application to make table reservations smooth experience.',
                theme_color: '#000000',
                background_color: '#ffffff',
                display: 'standalone',
                icons: [
                    {
                        src: 'icon-72x72.png',
                        type: 'image/png',
                        sizes: '72x72'
                    },
                    {
                        src: 'icon-128x128.png',
                        type: 'image/png',
                        sizes: '128x128'
                    },
                    {
                        src: 'icon-144x144.png',
                        type: 'image/png',
                        sizes: '144x144'
                    },
                    {
                        src: 'icon-152x152.png',
                        type: 'image/png',
                        sizes: '152x152'
                    },
                    {
                        src: 'icon-192x192.png',
                        type: 'image/png',
                        sizes: '192x192'
                    },
                    {
                        src: 'icon-256x256.png',
                        type: 'image/png',
                        sizes: '256x256'
                    },
                    {
                        src: 'icon-384x384.png',
                        type: 'image/png',
                        sizes: '384x384'
                    },
                    {
                        src: 'icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
                screenshots: [
                    {
                        src: 'screenshot-desktop1280x720.png',
                        sizes: '1280x720',
                        type: 'image/png',
                        purpose: 'any',
                        form_factor: 'wide'
                    },
                    {
                        src: 'screenshot-mobile750x1334.png',
                        sizes: '750x1334',
                        type: 'image/png',
                        purpose: 'any'
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
            },
            devOptions: {
                enabled: true,
                navigateFallback: 'index.html',
                suppressWarnings: true,
                type: 'module',
            },
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(root),
            '@modules': resolve(root, 'modules'),
            '@utils': resolve(root, 'utils'),
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            reporter: ['text', 'html'],
        },
    },
});
