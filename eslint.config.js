import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginJest from 'eslint-plugin-jest';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import pluginVitest from 'eslint-plugin-vitest';
import pluginImport from 'eslint-plugin-import';

export default [
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginVitest.configs.recommended,
    {
        ignores: [
            'dist/**',
            'dev-dist/**',
            'coverage/**',
            '*.min.js',
            'node_modules/**',
        ]
    },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            globals: {
                document: 'readonly',
                localStorage: 'readonly',
                vi: 'readonly',
                ...globals.node,
                ...globals.jest,
            }
        },
        settings: {
            react: {
                version: '18.2'
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                },
                alias: {
                    map: [
                        ['@assets', './src/assets'],
                        ['@modules', './src/modules'],
                        ['@appComponents', './src/modules/app/components'],
                        ['@utils', './src/utils'],
                        ['@', './src']
                    ],
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.jpg']
                }
            }
        },
        plugins: {
            'react-refresh': pluginReactRefresh,
            jest: pluginJest,
            'testing-library': pluginTestingLibrary,
            vitest: pluginVitest,
            react: pluginReact,
            import: pluginImport
        },
        rules: {
            'jsx-quotes': ['warn', 'prefer-single'],
            'no-debugger': 'warn',
            'import/order': [
                'warn',
                {
                    groups: [
                        ['builtin', 'external'],
                        'internal',
                        ['parent', 'sibling'],
                        'index'
                    ],
                    'newlines-between': 'always'
                }
            ],
            'import/named': 'warn',
            'import/namespace': 'off',
            'import/default': 'error',
            'import/export': 'error',
            'no-useless-return': 'warn',
            'no-duplicate-imports': 'warn',
            semi: ['warn', 'always'],
            quotes: ['warn', 'single'],
            indent: [
                'warn',
                4,
                {
                    SwitchCase: 1
                }
            ],
            'react/jsx-no-duplicate-props': 'warn',
            // 'react-hooks/rules-of-hooks': 'error',
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': [
                'warn',
                {
                    varsIgnorePattern: '^React$'
                }
            ],
            eqeqeq: ['warn', 'always'],
            'no-trailing-spaces': 'warn',
            'react/no-array-index-key': 'warn',
            complexity: [
                'warn',
                {
                    max: 10
                }
            ],
            'prefer-const': 'warn',
            'no-console': 'error',
            'object-curly-spacing': ['warn', 'never'],
            'array-bracket-spacing': ['warn', 'never'],
            'space-in-parens': ['warn', 'never'],
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true
                }
            ],
            'testing-library/await-async-queries': 'error',
            'testing-library/no-await-sync-queries': 'error',
            'testing-library/no-debugging-utils': 'warn',
            'testing-library/no-dom-import': 'off',
            'testing-library/no-container': 'warn'
        }
    }
];
