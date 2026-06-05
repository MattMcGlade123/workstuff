import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  restoreMocks: true,
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'shared/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!shared/types/**',
    '!shared/mockData/**',
    '!shared/graphql/**',
  ],
};

// Set timezone for reproducible date tests
process.env.TZ = 'GMT';

export default createJestConfig(config);
