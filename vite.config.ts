import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin()
    ],
    mode: 'production',
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),

                alune: resolve(__dirname, 'apps/alune/index.html'),
                colourcam: resolve(__dirname, 'apps/colourcam/index.html'),
                folium: resolve(__dirname, 'apps/folium/index.html'),
                lavvy: resolve(__dirname, 'apps/lavvy/index.html'),
                loca: resolve(__dirname, 'apps/loca/index.html'),
                keyr: resolve(__dirname, 'apps/keyr/index.html'),
                vion: resolve(__dirname, 'apps/vion/index.html'),

                ludara: resolve(__dirname, 'ludara/index.html'),
            }
        }
    }
});
