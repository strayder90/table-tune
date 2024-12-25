import {defineConfig} from 'vitest/config';
import {resolve} from 'path';
export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        coverage: {
            reporter: ['text', 'html', 'json'],
            provider: 'v8',
            lines: 90, // Minimum percentage of lines covered
            functions: 90, // Minimum percentage of functions covered
            branches: 90, // Minimum percentage of branches covered
            statements: 90 // Minimum percentage of statements covered
        },
        alias: {
            '@': resolve(__dirname, 'src'),
            '@modules': resolve(__dirname, 'src/modules'),
            '@appComponents': resolve(__dirname, 'src/modules/app/components'),
            '@utils': resolve(__dirname, 'src/utils'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }
});
