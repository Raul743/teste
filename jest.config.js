// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '@test-suite': '<rootDir>/client/test-suite/index.tsx',
    '@components/(.*)$': '<rootDir>/client/components/$1',
    "@redux/(.*)$": '<rootDir>/client/redux/$1',
    "@hooks/(.*)$": '<rootDir>/client/hooks/$1',
    "@constants/(.*)$": '<rootDir>/constants/$1',
  },
};
