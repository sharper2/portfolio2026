// @check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://sharper2.github.io',
    base: '/portfolio2026/',
    build: {
        assets: '_astro_v2'
    }
});
