export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.svg\\?react$': '<rootDir>/src/tests/__mocks__/svgMock.tsx',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
