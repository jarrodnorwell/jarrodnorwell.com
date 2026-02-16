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
                colourcam: resolve(__dirname, 'colourcam/index.html'),
                folium: resolve(__dirname, 'folium/index.html'),
                lavvy: resolve(__dirname, 'lavvy/index.html'),
                loca: resolve(__dirname, 'loca/index.html'),
                keyr: resolve(__dirname, 'keyr/index.html')
            }
        }
    }
});
