import {defineConfig} from 'vitest/config';
import {resolve} from 'path';

const root = resolve(__dirname, './src/');
export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        coverage: {
            reporter: ['text', 'html', 'json'],
            provider: 'v8',
            lines: 80, // Minimum percentage of lines covered
            functions: 80, // Minimum percentage of functions covered
            branches: 80, // Minimum percentage of branches covered
            statements: 80 // Minimum percentage of statements covered
        },
        resolve: {
            alias: {
                '@modules': resolve(root, './src/modules'),
                '@utils': resolve(root, './src/utils'),
                '@': resolve(root, './src')
            }
        }
    }
});
