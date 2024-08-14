module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.ts'],
    collectCoverage: true,
    moduleFileExtensions: ['ts', 'js'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
    coverageReporters: ['text', 'lcov'],
}