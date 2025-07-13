import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: [
                'app/**/*.php',
                'resources/views/**/*.blade.php',
                'routes/**/*.php',
                'config/**/*.php',
            ],
        }),
        tailwindcss(),
    ],
});
