import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
    base: './',
    build: {
        outDir: './docs',
    },
    resolve: {
        alias: {
            'root': path.resolve(__dirname, './'),
            'assets': path.resolve(__dirname, './assets'),
            'scenes': path.resolve(__dirname, './scenes'),
        },
    },
});