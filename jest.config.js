export default {
    verbose: true,
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    coverageReporters: ['html'],
};
