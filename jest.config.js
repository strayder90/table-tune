export default {
    verbose: true,
    testEnvironment: 'happy-dom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    coverageReporters: ['text', 'html', 'json'],
};
