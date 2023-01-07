const ignores = ['/node_modules/', '/__test__/', '__mocks__'];

const jestConfig = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/test/coverage/report',
  coveragePathIgnorePatterns: [...ignores],
  coverageReporters: ['html'],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 30,
      lines: 40,
      statements: 40,
    },
  },
  moduleDirectories: ['node_modules', './src'],
  moduleFileExtensions: ['tsx', 'jsx', 'js', 'ts'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest/setupTests.js'],
  slowTestThreshold: 30,
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.test.tsx',
    '<rootDir>/src/**/*.test.jsx',
    '<rootDir>/test/**/*.test.ts',
  ],
  testTimeout: 20000,
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@yoga/auth-utils)'],
  watchPathIgnorePatterns: ['node_modules'],
};

module.exports = jestConfig;
