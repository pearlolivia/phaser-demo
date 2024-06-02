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
            'images': path.resolve(__dirname, './public/images'),
            'scenes': path.resolve(__dirname, './scenes'),
        },
    },
});