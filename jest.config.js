module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  //testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '@/components/(.*)': '<rootDir>/components/$1',
  },
};
