import {
    defineConfig,
    minimal2023Preset as preset,
// eslint-disable-next-line import/no-unresolved
} from '@vite-pwa/assets-generator/config';

export default defineConfig({
    headLinkOptions: {
        preset: '2023',
    },
    preset,
    images: ['public/favicon.svg'],
});
